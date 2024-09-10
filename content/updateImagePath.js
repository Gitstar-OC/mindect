// Please note that this function is used to change the pathname of the images it will do the following changes 
// ![SPL2](./../Assets/Supervised/SVL1.2.png) will be changed to ![SPL2](/SL/SVL.1.2.png)
// ![USL2](./../Assets/Unsupervised/USL1.2.png) will be changed to ![USL2](/USL/USL1.2.png)
// ![NNL (2)](./../../Assets/Algorithms/NNM/NNL%20(2).png) will be changed to ![NNL (2)](/Algs/NNM/NNL%20(2).png)

// Run it by running the following command in the terminal after changing directory to docs, `node updateImagePath.js`

const fs = require('fs');
const path = require('path');

// Define the root directory containing the MDX and MD files
const docsFolder = './docs';

// Function to replace image paths based on the rules provided
const replaceImagePaths = (content) => {
  return content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
    // Modify the path based on folder type
    let updatedPath = imagePath;

    // Replace based on conditions
    if (imagePath.includes('Unsupervised')) {
      updatedPath = updatedPath.replace(/.*Unsupervised/, '/USL');
    } else if (imagePath.includes('Supervised')) {
      updatedPath = updatedPath.replace(/.*Supervised/, '/SL');
    } else if (imagePath.includes('Algorithms')) {
      updatedPath = updatedPath.replace(/.*Algorithms/, '/Algs');
    }

    // Return the updated markdown image tag
    return `![${altText}](${updatedPath})`;
  });
};

// Function to process each .mdx or .md file
const processFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    // Replace image paths in the file content
    const updatedContent = replaceImagePaths(data);

    // Write the updated content back to the file
    fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to file ${filePath}:`, err);
      } else {
        console.log(`Updated image paths in file: ${filePath}`);
      }
    });
  });
};

// Function to recursively process all .mdx and .md files in a folder
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
        } else if (['.md', '.mdx'].includes(path.extname(file))) {
          // If it's an MDX or MD file, process it
          processFile(fullPath);
        }
      });
    });
  });
};

// Start processing the docs folder
processFolder(docsFolder);
