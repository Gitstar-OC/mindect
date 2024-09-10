// this file takes the name of the markdown file and changes it 
// in the below form 
// ---
// title: File Name 
// --- 
// this converts the text in front of the single hastag.

const fs = require('fs');
const path = require('path');

// Function to process files and folders recursively
function processDirectory(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${dir}`, err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error reading file stats: ${filePath}`, err);
          return;
        }

        if (stats.isDirectory()) {
          // Recursively process subdirectories
          processDirectory(filePath);
        } else if (stats.isFile() && (file.endsWith('.md') || file.endsWith('.mdx'))) {
          processFile(filePath);
        }
      });
    });
  });
}

// Function to process each file
function processFile(filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${filePath}`, err);
      return;
    }

    const lines = data.split('\n');
    const firstLine = lines[0].trim();

    // Check if the file starts with a single '#'
    if (firstLine.startsWith('# ') && !firstLine.startsWith('##') && !firstLine.startsWith('###')) {
      const title = firstLine.substring(2).trim(); // Extract the title after '# '

      // Add the metadata at the top
      const newContent = `---
title: ${title}
---

${lines.slice(1).join('\n')}`;

      // Write the updated content back to the file
      fs.writeFile(filePath, newContent, 'utf-8', (err) => {
        if (err) {
          console.error(`Error writing to file: ${filePath}`, err);
        } else {
          console.log(`Processed file: ${filePath}`);
        }
      });
    }
  });
}

// Start processing from the 'docs' folder
const docsFolderPath = path.join(__dirname, 'docs');
processDirectory(docsFolderPath);
