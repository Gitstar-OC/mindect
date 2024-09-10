// this file checks if there is a meta.json file in a folder if not, it generates it
//  by taking the folder name the file is not present in and the name of other files
// and then adds it in this way 


// {
//   "title": "folder name",
//   "pages": ["..."]
// }

const fs = require('fs');
const path = require('path');

// Define the root directory containing the folders
const docsFolder = './docs';

// Function to create or update meta.json in a folder
const createMetaJson = (folderPath, folderName) => {
  const metaFilePath = path.join(folderPath, 'meta.json');

  // Check if meta.json already exists
  if (fs.existsSync(metaFilePath)) {
    console.log(`meta.json already exists in ${folderPath}, skipping...`);
    return;
  }

  // Prepare the initial meta.json content
  let metaContent = {
    title: folderName, // Use the folder name as the title
    pages: ["..."] // Add placeholder for pages as '...'
  };

  // Write the meta.json file with the generated content
  fs.writeFileSync(metaFilePath, JSON.stringify(metaContent, null, 2), 'utf8');
  console.log(`Created meta.json in ${folderPath}`);
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
          // If it's a subdirectory, process it
          createMetaJson(fullPath, file); // file here is the name of the folder
          processFolder(fullPath); // Recursively process subdirectories
        }
      });
    });
  });
};

// Start processing the docs folder
processFolder(docsFolder);
