const fs = require('fs');
const path = require('path');

// Function to format title
function formatTitle(fileName) {
  // Remove file extension and split by dash
  return fileName.replace(/\.[^/.]+$/, '')  // Remove extension
    .split('-')  // Split by dash
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
    .join(' ');  // Join with spaces
}

// Function to add frontmatter
function addFrontmatter(filePath) {
  const fileName = path.basename(filePath);
  const formattedTitle = formatTitle(fileName);
  const frontmatter = `---
title: ${formattedTitle}
description: In Progress
---\n\n`;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${filePath}:`, err);
      return;
    }

    // Remove existing frontmatter if present
    let content = data;
    if (content.startsWith('---\n')) {
      const secondDashIndex = content.indexOf('---', 4);
      if (secondDashIndex !== -1) {
        content = content.substring(secondDashIndex + 4);
      }
    }

    // Add new frontmatter
    const newContent = frontmatter + content.trim();
    
    fs.writeFile(filePath, newContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to ${filePath}:`, err);
      } else {
        console.log(`Updated frontmatter in ${filePath}`);
      }
    });
  });
}

// Function to process directory
function processDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(directoryPath, file);
      
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }

        if (stats.isDirectory()) {
          processDirectory(filePath);
        } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
          addFrontmatter(filePath);
        }
      });
    });
  });
}

// Start processing from ./usle directory
const usleDir = path.join(__dirname, 'usle');
processDirectory(usleDir);