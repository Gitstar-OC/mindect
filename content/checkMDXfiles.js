// this files checks if mdx files collapse with same names, 
// are empty or not, and if they contain the title or not

const fs = require('fs');
const path = require('path');

const docsFolder = './docs';

// Function to recursively read all mdx files from the root and subfolders
function readMdxFiles(folderPath) {
  const files = fs.readdirSync(folderPath, { withFileTypes: true });
  const fileData = [];

  files.forEach(file => {
    const filePath = path.join(folderPath, file.name);

    if (file.isDirectory()) {
      // Recursively call the function for subdirectories
      fileData.push(...readMdxFiles(filePath));
    } else if (file.isFile() && file.name.endsWith('.mdx')) {
      const fileContent = fs.readFileSync(filePath, 'utf-8').trim();

      // Check if the file is empty
      if (!fileContent) {
        console.log(`File is empty: ${filePath}`);
      }

      // Extract title from the file content
      const titleMatch = fileContent.match(/^---\ntitle: (.+)\n---/);

      if (titleMatch) {
        const title = titleMatch[1].trim();
        fileData.push({ filePath, title });
      } else {
        console.log(`Invalid title format in: ${filePath}`);
      }
    }
  });

  return fileData;
}

// Function to check for duplicate titles
function checkDuplicateTitles(fileData) {
  const titleMap = new Map();

  fileData.forEach(({ filePath, title }) => {
    if (titleMap.has(title)) {
      console.log(`Duplicate title found in: ${filePath} and ${titleMap.get(title)}`);
    } else {
      titleMap.set(title, filePath);
    }
  });
}

// Start checking mdx files in the docs folder and subfolders
const mdxFilesData = readMdxFiles(docsFolder);
checkDuplicateTitles(mdxFilesData);
