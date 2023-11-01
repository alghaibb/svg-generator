const inquirer = require('inquirer');

/**
 * Prompt the user for details to generate an SVG.
 * This function utilizes the inquirer library to interactively ask the user for details.
 *
 * @returns {Promise<Object>} An object containing details for SVG generation.
 */
async function getSVGDetails() {
  const questions = [
    {
      // Prompt for a name of up to 3 characters
      type: 'input',
      name: 'name',
      message: 'Enter a name (up to 3 characters):',
      validate: function (value) {
        if (value.length <= 3) {
          return true;
        }
        return 'Please enter a name with up to 3 characters only.';
      },
    },
    {
      // Prompt for shape selection: Circle, Square or Triangle
      type: 'list',
      name: 'shape',
      message: 'Which shape would you like to create?',
      choices: ['Circle', 'Square', 'Triangle'],
      // Convert the shape choice to lowercase for uniformity
      filter: function (val) {
        return val.toLowerCase();
      }
    },
    {
      // Prompt for shape color with a default value of black (#000000)
      type: 'input',
      name: 'color',
      message: 'Enter the color for the shape:',
      default: '#000000',
    },
    {
      // Prompt for text color with a default value of white (#FFFFFF)
      type: 'input',
      name: 'textColor',
      message: 'Enter the color for the text:',
      default: '#FFFFFF',
    }
  ];

  // Display the interactive prompts and return the user's answers
  return inquirer.prompt(questions);
}

module.exports = getSVGDetails;
