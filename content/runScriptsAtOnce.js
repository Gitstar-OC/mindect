// this runs the following scripts at once 
// 'renameMDtoMDX.js',
// 'changeSpaceToDash.js',
// 'updateImagePath.js',
// 'createMetaJson.js',
// 'changeNameToTitle.js',
// 'removeComments.js'

const { exec } = require('child_process');

// List of JS files to run
const scripts = [
  'renameMDtoMDX.js',
  'changeSpaceToDash.js',
  'updateImagePath.js',
  'createMetaJson.js',
  'changeNameToTitle.js',
  'removeComments.js'
];

scripts.forEach(script => {
  exec(`node ${script}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error running ${script}:`, err);
      return;
    }
    console.log(`Output from ${script}: ${stdout}`);
  });
});
