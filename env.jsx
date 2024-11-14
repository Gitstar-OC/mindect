const fs = require("fs");
const path = require("path");

// Configurations
const WORDS_PER_MINUTE = 15; // Typing speed per word
const CHARS_PER_SECOND = (WORDS_PER_MINUTE * 5) / 60; // Roughly 5 characters per word
const DELAY_PER_CHAR = 1000 / CHARS_PER_SECOND;
const DELETE_PERCENTAGE = 0; // 10% of the text will be deleted each time

// Sample text to write, modify as needed
const File = `
"use client";
import Footer from "../footer";
import Header from "./header"
import CTA from "./cta"
import Mission from "./mission"
import Reviews from "./reviews"

export default function Homepage() {


  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-100">
      <Header />
      <CTA />
      <CTA />
      <Mission />
      <Reviews />
      <Footer />
    </div>
  );
}



{/** Wait what you don't want to learn ai and go with the hype, alright you can learn mathematics then! */}
// doing sub parts of them as cta, header and other parts to avoid conflicts and other things
// create an expand on click of the card from the aceternity so that people will know what they can learn!
// find out a great animation for the card that can be used for the website.
// update the button component to be used from the  components!

// 6 svg images for 6 cards for people and the cards will be switched every 10 to 15 seconds and the selected one will be scaled up or added effects to for people!. 
// add a sidebeam for each chart 
// could use layout grid for some of the things! 

// can add a main button 
`

const Text = File.split(""); // Splitting into characters

let isRunning = true;

async function typeEffect(filePath) {
    try {
        let content = ""; // start with an empty content

        while (isRunning) {
            // Simulate typing character by character
            for (const char of Text) {
                if (!isRunning) break;

                content += char;
                fs.writeFileSync(filePath, content); // write to file progressively
                process.stdout.write(char); // display in terminal
                await delay(DELAY_PER_CHAR);
            }

            if (!isRunning) break;

            // Delete a portion of the text once fully typed
            let charsToKeep = Math.floor(content.length * (1 - DELETE_PERCENTAGE));
            content = content.slice(-charsToKeep);
            fs.writeFileSync(filePath, content);
            console.log("\nDeleted a portion of the text...");

            // Wait a bit before starting the next cycle
            await delay(1000);
        }
    } catch (error) {
        console.error("Error during typing effect:", error);
    }
}

// Helper function to create delays
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Start the typing effect
const filePath = path.join(__dirname, "./hello.md");
console.log("Starting typing effect... Press CTRL+C to stop.");
typeEffect(filePath);

// Handle graceful exit
process.on("SIGINT", () => {
    console.log("\nStopping typing effect...");
    isRunning = false;
});
