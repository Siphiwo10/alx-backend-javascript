// Importing the 'readline' module to interact with user input
const readline = require('readline');

// Creating an interface to read user input from stdin and write output to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the initial prompt message
console.log("Welcome to Holberton School, what is your name?");

rl.on('line', (input) => {
    // Display the user's name
    console.log(`Your name is: ${input}`);
    // Display the closing message
    console.log("This important software is now closing");
    // Close the readline interface
    rl.close();
});

rl.on('close', () => {
    // Ensure the closing message is followed by a new line
    process.exit(0);
});
