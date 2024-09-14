// this file changes the name of mdx file from title, camel or upper case to snake case 
// but with a dash
// it convert MatrixMultiplicationCode.mdx to matrix-multiplication-code.mdx

const fs = require('fs');
const path = require('path');

// Define the root directory containing the MDX files
const docsFolder = './docs';

// Function to convert CamelCase or PascalCase to snake-case
const convertToSnakeCase = (filename) => {
  return filename
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Add dash between lowercase and uppercase letters
    .replace(/([A-Z])/g, '-$1')          // Add dash before uppercase letters
    .toLowerCase()                       // Convert entire string to lowercase
    .replace(/--+/g, '-')                // Ensure no double dashes are created
    .replace(/^-/, '');                  // Remove leading dash, if any
};

// Function to rename the file if necessary
const renameFile = (folderPath, fileName) => {
  // Skip 'index.mdx'
  if (fileName === 'index.mdx') {
    return;
  }

  const fileNameWithoutExt = path.parse(fileName).name;
  const fileExtension = path.extname(fileName);

  // Only process files with names that start with uppercase letters
  if (/^[A-Z]/.test(fileNameWithoutExt)) {
    const snakeCaseName = convertToSnakeCase(fileNameWithoutExt);

    // Full path for the old and new file names
    const oldFilePath = path.join(folderPath, fileName);
    const newFilePath = path.join(folderPath, `${snakeCaseName}${fileExtension}`);

    // Rename the file if necessary
    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.error(`Error renaming file ${oldFilePath}:`, err);
      } else {
        console.log(`Renamed file: ${oldFilePath} -> ${newFilePath}`);
      }
    });
  }
};

// Function to recursively process folders and rename files
const processFolder = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading folder ${folderPath}:`, err);
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
          // If it's a directory, recursively process the folder
          processFolder(fullPath);
        } else if (path.extname(file) === '.mdx') {
          // If it's an MDX file, process and rename it
          renameFile(folderPath, file);
        }
      });
    });
  });
};

// Start processing the docs folder
processFolder(docsFolder);
