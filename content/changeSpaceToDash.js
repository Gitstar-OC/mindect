// This file checks if there is a space in the name of the folder and if any letter is capital and then 
// converts it to dashes and small letters for example with this it would convert "I am the Greatest man on earth" 
// to "i-am-the-greatest-man-on-earth"


const fs = require('fs');
const path = require('path');

// Define the root directory containing the folders
const docsFolder = './docs';

// Function to rename folders by replacing spaces with hyphens and converting to lowercase
const renameFolder = (folderPath, folderName) => {
  let newFolderName = folderName;

  if (/[A-Z ]/.test(folderName)) {  // Check if folderName contains any uppercase letters or spaces
    // Replace spaces with hyphens and convert to lowercase
    newFolderName = folderName.replace(/ /g, '-').toLowerCase();
    const newFolderPath = path.join(path.dirname(folderPath), newFolderName);

    fs.rename(folderPath, newFolderPath, (err) => {
      if (err) {
        console.error(`Error renaming folder ${folderPath}:`, err);
        return;
      }
      console.log(`Renamed folder: ${folderPath} -> ${newFolderPath}`);

      // Continue processing the renamed folder (for subdirectories)
      processFolder(newFolderPath);
    });
  } else {
    // If no uppercase or spaces, continue processing the folder
    processFolder(folderPath);
  }
};

// Function to recursively process folders
const processFolder = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading folder ${folderPath}:`, err);
      return;
    }

    // Loop through each item in the folder
    files.forEach(file => {
      const fullPath = path.join(folderPath, file);

      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats of file ${fullPath}:`, err);
          return;
        }

        if (stats.isDirectory()) {
          // Rename the folder if it contains spaces or uppercase letters
          renameFolder(fullPath, file);
        }
      });
    });
  });
};

// Start processing the docs folder
processFolder(docsFolder);
