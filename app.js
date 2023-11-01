const getSVGDetails = require('./prompt');
const generateSVG = require('./generateSVG');
const fs = require('fs');

async function main() {
  const details = await getSVGDetails(); // Get user input
  const svg = generateSVG(details); // Generate SVG based on user input

  console.log(svg); // Print the generated SVG

  // Generate HTML content with SVG image embedded
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generated SVG</title>
    </head>
    <body>
      ${svg}
    </body>
    </html>
  `;

  // Save SVG as 'output.svg':
  fs.writeFileSync('output.svg', svg);

  // Save the HTML content to a file
  fs.writeFileSync('output.html', htmlContent);

}

main();
