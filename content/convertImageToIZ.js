const fs = require('fs');
const path = require('path');

// Define the root directory containing the MDX files
const docsFolder = './docs';

// Function to replace markdown image tags with <IZ> components
const replaceImageTags = (content) => {
  return content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
    // Convert markdown image tag to JSX IZ component
    return `<IZ alt="${altText}" src="${imagePath}" />`;
  });
};

// Function to process each .mdx file
const processFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    // Replace markdown image tags with IZ components
    const updatedContent = replaceImageTags(data);

    // Write the updated content back to the file
    fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to file ${filePath}:`, err);
      } else {
        console.log(`Updated image tags in file: ${filePath}`);
      }
    });
  });
};

// Function to recursively process all .mdx files in a folder
const processFolder = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading the folder ${folderPath}:`, err);
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
