// this file removes all the comments present in the mdx files, so that there should be 
// no error in the production and development server

const fs = require('fs');
const path = require('path');

// Define the root directory containing the MDX files
const docsFolder = './docs';

// Function to remove HTML comments from the content
const removeComments = (content) => {
  // Use regex to match and remove comments in the format <!-- commented text -->
  return content.replace(/<!--[\s\S]*?-->/g, '');
};

// Function to process each .mdx file
const processFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    // Remove comments from the file content
    const updatedContent = removeComments(data);

    // Write the updated content back to the file
    fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to file ${filePath}:`, err);
      } else {
        console.log(`Removed comments from file: ${filePath}`);
      }
    });
  });
};

// Function to recursively process all .mdx files in a folder
const processFolder = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading folder ${folderPath}:`, err);
      return;
    }

    // Loop through each item in the folder
    files.forEach((file) => {
      const fullPath = path.join(folderPath, file);

      // Check if the item is a directory or file
      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats of file ${fullPath}:`, err);
          return;
        }

        if (stats.isDirectory()) {
          // If it's a directory, recursively process the folder
          processFolder(fullPath);
        } else if (path.extname(file) === '.mdx') {
          // If it's an MDX file, process it
          processFile(fullPath);
        }
      });
    });
  });
};

// Start processing the docs folder
processFolder(docsFolder);
