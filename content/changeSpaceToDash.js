// This file checks if there is a space in the name of the folder and then 
// converts it to dashes for example with this it would convert "I am the greatest man on earth" 
// to "I-am-the-greatest-man-on-earth"

const fs = require('fs');
const path = require('path');

// Define the root directory containing the folders
const docsFolder = './docs';

// Function to rename folders by replacing spaces with hyphens
const renameFolder = (folderPath, folderName) => {
  if (folderName.includes(' ')) {
    const newFolderName = folderName.replace(/ /g, '-');
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
    // If no spaces, continue processing the folder
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
          // Rename the folder if it contains spaces
          renameFolder(fullPath, file);
        }
      });
    });
  });
};

// Start processing the docs folder
processFolder(docsFolder);
