const fs = require('fs');
const path = require('path');

// Function to convert camel case or Pascal case to dash case
const toDashCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Add dash between lowercase and uppercase letters
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // Add dash between consecutive uppercase letters followed by lowercase
    .toLowerCase(); // Convert to lowercase
};

// Directory containing the files to rename
const directoryPath = path.join(__dirname, '../usle-copy');

// Function to rename files recursively
const renameFilesRecursively = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
      const oldPath = path.join(dir, file);
      fs.stat(oldPath, (err, stats) => {
        if (err) {
          return console.log('Error stating file:', err);
        }

        if (stats.isDirectory()) {
          // Recursively rename files in subdirectory
          renameFilesRecursively(oldPath);
        } else {
          const newPath = path.join(dir, toDashCase(file));
          fs.rename(oldPath, newPath, (err) => {
            if (err) {
              console.log('Error renaming file:', err);
            } else {
              console.log(`Renamed: ${file} -> ${path.basename(newPath)}`);
            }
          });
        }
      });
    });
  });
};

// Start renaming files from the root directory
renameFilesRecursively(directoryPath);