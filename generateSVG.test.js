// Import the generateSVG function for testing
const generateSVG = require('./generateSVG');

// Begin test suite for the generateSVG function
describe('generateSVG', () => {

  // Test case for generating a circle SVG
  it('should generate a circle SVG with given details', () => {
    // Define input details for the SVG generation
    const details = {
      shape: 'circle',
      color: '#FF5733',
      textColor: '#000000',
      name: 'XYZ'
    };

    // Call the generateSVG function with the provided details
    const result = generateSVG(details);

    // Check if the generated SVG contains the expected circle element
    expect(result).toContain('<circle cx="100" cy="100" r="50" fill="#FF5733" />');

    // Check if the generated SVG contains the expected text element with the name 'XYZ'
    expect(result).toContain('<text x="100" y="100" fill="#000000" font-size="24" font-family="Arial" text-anchor="middle" dy=".3em">XYZ</text>');
  });

  // Test case for generating a square SVG
  it('should generate a square SVG with given details', () => {
    // Define input details for the SVG generation
    const details = {
      shape: 'square',
      color: '#33FF57',
      textColor: '#FFFFFF',
      name: 'AB'
    };

    // Call the generateSVG function with the provided details
    const result = generateSVG(details);

    // Check if the generated SVG contains the expected square (rectangle) element
    expect(result).toContain('<rect width="100" height="100" fill="#33FF57" />');

    // Check if the generated SVG contains the expected text element with the name 'AB'
    expect(result).toContain('<text x="100" y="100" fill="#FFFFFF" font-size="24" font-family="Arial" text-anchor="middle" dy=".3em">AB</text>');
  });

  // Test case for generating a triangle SVG
  it('should generate a triangle SVG with given details', () => {
    // Define input details for the SVG generation
    const details = {
      shape: 'triangle',
      color: '#5733FF',
      textColor: '#FFFFFF',
      name: 'TRI'
    };

    // Call the generateSVG function with the provided details
    const result = generateSVG(details);

    // Check if the generated SVG contains the expected triangle (polygon) element
    expect(result).toContain('<polygon points="100,10 190,190 10,190" fill="#5733FF" />');

    // Check if the generated SVG contains the expected text element with the name 'TRI'
    expect(result).toContain('<text x="100" y="100" fill="#FFFFFF" font-size="24" font-family="Arial" text-anchor="middle" dy=".3em">TRI</text>');
  });

  // NOTE: Additional test cases for other shapes and edge cases can be added below
});
