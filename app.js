const getSVGDetails = require('./prompt');
const generateSVG = require('./generateSVG');
const fs = require('fs');

async function main() {
  const details = await getSVGDetails(); // Get user input
  const svg = generateSVG(details); // Generate SVG based on user input

  console.log(svg); // Print the generated SVG

  // Optionally, you can save the SVG to a file:
  fs.writeFileSync('output.svg', svg);
}

main();
