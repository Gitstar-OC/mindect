// this file changes the extension of files ending with md to mdx 
const fs = require('fs');
const path = require('path');

// Define the root directory containing the MD files
const docsFolder = './docs';

// Function to rename .md files to .mdx
const renameFileExtensions = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading the folder ${folderPath}:`, err);
      return;
    }

    // Loop through each item in the folder
    files.forEach((file) => {
      const fullPath = path.join(folderPath, file);

      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats of file ${fullPath}:`, err);
          return;
        }

        if (stats.isDirectory()) {
          // Recursively process subdirectories
          renameFileExtensions(fullPath);
        } else if (path.extname(file) === '.md') {
          // Rename .md file to .mdx
          const newFilePath = fullPath.replace('.md', '.mdx');
          
          fs.rename(fullPath, newFilePath, (err) => {
            if (err) {
              console.error(`Error renaming file ${fullPath}:`, err);
            } else {
              console.log(`Renamed: ${fullPath} -> ${newFilePath}`);
            }
          });
        }
      });
    });
  });
};

// Start processing the docs folder
renameFileExtensions(docsFolder);
