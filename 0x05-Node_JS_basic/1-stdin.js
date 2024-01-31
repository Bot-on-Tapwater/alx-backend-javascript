const readline = require('readline');

console.log('Welcome to Holberton School, what is your name?');

if (!process.stdin.isTTY) {
  // Input is from a pipe or file
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (input) => {
    // Remove newline character
    const name = input.trim();
    console.log(`Your name is: ${name}`);
  });

  process.stdin.on('end', () => {
    console.log('This important software is now closing');
  });
} else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
  });

  rl.on('close', () => {
    console.log('This important software is now closing');
  });

  // Listen for the SIGINT (Ctrl+C) event to gracefully exit
  process.on('SIGINT', () => {
    rl.close();
  });
}
