// This file is used to get all of the names of the folder in the docs repository and convert
// it to a text file
const fs = require('fs');
const path = require('path');

// Set the directory path
const docsDir = './docs';
const outputFilePath = path.join(docsDir, 'things.txt');

// Function to process files and folders recursively
function processDirectory(dir, indent = '') {
    let outputLines = [];

    // Read the directory contents
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    items.forEach(item => {
        const itemPath = path.join(dir, item.name);
        
        if (item.isDirectory()) {
            // Add the directory name to the output
            outputLines.push(`${indent}${item.name}`);
            // Recursively process subdirectories with increased indentation
            const subDirOutput = processDirectory(itemPath, indent + '  -- ');
            outputLines = outputLines.concat(subDirOutput);
        } else if (item.isFile() && (item.name.endsWith('.md') || item.name.endsWith('.mdx'))) {
            // Add the file name to the output with indentation
            outputLines.push(`${indent}- ${item.name}`);
            processFile(itemPath); // Process each markdown file
        }
    });

    return outputLines; // Return collected output lines
}

// Function to process each markdown file
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

// Function to write the directory structure to things.txt
function writeDirectoryStructureToTextFile() {
    const outputLines = processDirectory(docsDir);
    fs.writeFile(outputFilePath, outputLines.join('\n'), (err) => {
        if (err) {
            console.error('Error writing to things.txt:', err);
        } else {
            console.log(`Successfully written to ${outputFilePath}`);
        }
    });
}

// Start processing from the 'docs' folder
writeDirectoryStructureToTextFile();