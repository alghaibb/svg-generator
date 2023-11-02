# <strong>SVG Wizard

## Table Of Contents

- [Description](#description)
- [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contribution)
- [Tests](#tests)
- [Portfolio](#portfolio)
- [License](#license)

<br>![GitHub repo size](https://img.shields.io/github/repo-size/alghaibb/svg-generator?style=plastic)

![GitHub top language](https://img.shields.io/github/languages/top/alghaibb/svg-generator?style=plastic)

## Description

An interactive tool built with Node.js that allows users to effortlessly create SVG shapes. Choose between different shapes like circles, squares, or triangles, customize their colors, and add a personalized name overlay. Exported as both SVG and HTML formats for easy viewing and embedding.

<a href="#table-of-contents">Back to Table of Contents</a>
### Motivation

The svg-generator project was born out of a need for a straightforward tool to produce basic SVG graphics. While it's not intended to replace comprehensive design software, it serves as a quick and user-friendly solution for those who require simple SVG shapes for their projects or websites. Through an interactive command-line interface, users can customize basic attributes and instantly generate SVG graphics, making it a handy tool for rapid prototyping or for those just starting out with SVGs.

<a href="#table-of-contents">Back to Table of Contents</a>
### Why I Built This

I built the svg-generator to offer a simple solution for creating basic SVG shapes, bridging the gap for beginners unfamiliar with SVGs and providing a minimalist alternative to complex design tools.

<a href="#table-of-contents">Back to Table of Contents</a>
### Problem Solved

This project addresses the need for an intuitive and straightforward tool to generate basic SVG shapes without the complexity of professional design software, making SVG creation accessible to beginners and those seeking a quick solution.

<a href="#table-of-contents">Back to Table of Contents</a>
### What I Learned

While developing this project, I learned about the intricacies of SVG elements and their attributes, honed my skills in Node.js, and gained hands-on experience with the Inquirer library for creating interactive command-line interfaces. Additionally, I understood the importance of user input validation and how to seamlessly integrate different modules to produce a cohesive application.

<a href="#table-of-contents">Back to Table of Contents</a>

## Screenshot


<div align="center">

<img alt="live screenshot of showcasing project" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGNncjlyOGJyYjE5MjNranA4a3J0eDg1OGgwMXJraTFnbmg0dnZ0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GrqFMjz2XYo04Ht807/giphy.gif" width="400px"><br>
  
[Video of demonstration](https://streamable.com/f3npb4)

</div>

<a href="#table-of-contents">Back to Table of Contents</a>

## Technologies

- **JavaScript**: The primary programming language used for developing the logic of the SVG generator.

- **Node.js**: The runtime environment for executing the JavaScript code server-side.

- **Inquirer.js**: A library used for creating interactive command-line prompts. It's used in the getSVGDetails function to gather SVG details from the user.

- **File System (fs) module**: A core Node.js module used for working with the file system on your computer. It's utilized in the project to write the generated SVG and HTML content to files.

- **SVG**: Scalable Vector Graphics, an XML-based vector image format for two-dimensional graphics. It's the primary output format of the generator.

<a href="#table-of-contents">Back to Table of Contents</a>

## Installation

1. **Clone the Repository**:<br>
- `git clone https://github.com/alghaibb/svg-generator.git`

2. **Navigate to the Directory**:<br>
- `cd svg-generator`

3. **Install Dependencies**:<br>
- `npm install`

4. **Run the Application**:<br>
- `node app.js`

5. **Follow the Prompts**:<br>

- The application will ask for SVG details. Provide inputs as required.

<a href="#table-of-contents">Back to Table of Contents</a>
## Usage

### Initialization:
Begin by running the main script. When executed, it will initiate a series of command-line prompts asking for specific details related to the SVG you wish to generate.

### Provide Details:

- Name: You can input a name with up to 3 characters. This will be displayed within the generated SVG.
- Shape Selection: Choose from three options - Circle, Square, or Triangle. This determines the main shape of your SVG.
- Shape Color: Input a color value for the selected shape. You can use hexadecimal color codes (like #FF5733), or common color names (like red).
- Text Color: Specify a color for the text that appears inside the SVG. Like with the shape color, you can use hexadecimal color codes or common color names.

### Generate and Save:
Once you provide all the details, the SVG generator will create the SVG based on your specifications. The generated SVG is then saved as output.svg. Additionally, an HTML file (output.html) embedding this SVG will also be created. Both files are saved in the current directory.

### Viewing Your SVG:

- Open output.html in any modern web browser to see your generated SVG.
- Alternatively, tools and software that support SVG format can be used to view output.svg.

### Repeat:
Want to create another SVG? Just run the script again and provide new details!

<a href="#table-of-contents">Back to Table of Contents</a>
## Contribution

Thank you for your interest in contributing to the SVG Generator! We appreciate all efforts to improve and extend the project. To ensure that contributions are aligned with the project's goals and maintain its quality, please follow these guidelines:

### Set Up Your Environment:

- **Fork** the `svg-generator` repository to your personal GitHub account.
- **Clone** your fork locally: `git clone https://github.com/YOUR_USERNAME/svg-generator.git`
- **Install** necessary dependencies as outlined in the installation instructions.

### Find an Issue or Feature:

- Look through the **Issues** tab to find something you're interested in. This could be a bug, enhancement, or a feature request.
- If you have a new idea or identify a bug that hasn't been reported, open a new issue detailing the enhancement or bug.

### Create a New Branch:
- Before making changes, create a new branch using the format `feature/your-feature-name` or `bugfix/your-bugfix-name`.

### Make Your Changes:

- Write your code. Ensure it adheres to the project's coding style and standards.
- Test your changes locally to make sure everything works as expected and doesn't introduce new issues.

### Commit and Push:

- Commit your changes with a descriptive commit message.
- Push your branch to your fork on GitHub.

### Create a Pull Request (PR):

- Go to the `svg-generator` repository and click on the **Pull Requests** tab.
- Click on the **New Pull Request** button and select your fork and branch in the comparison.
- Describe your changes in the PR description, mention the issue it solves (if any), and any other information you think is relevant.
- Submit the PR.

### Code Review:

- Once your PR is submitted, maintainers or project contributors will review your contribution.
- Respond to any feedback and make necessary changes to your branch. Your PR will be updated automatically.
- Once your PR is approved, it will be merged into the main codebase.

### Stay Updated:
- Regularly pull changes from the main svg-generator repository to keep your local copy and fork up to date. This will make future contributions smoother.

### Respect & Collaboration:
Please remember to be respectful in all interactions with project maintainers and other contributors. Collaboration is key, and constructive feedback is always welcomed!

<a href="#table-of-contents">Back to Table of Contents</a>
## Tests

To ensure the SVG Generator functions as expected, follow the steps below to run the provided test suite:

### Setting Up:

- If you haven't already, **clone** the `svg-generator` repository locally: `git clone https://github.com/alghaibb/svg-generator.git`
- Navigate to the project directory: `cd svg-generator`
- **Install** the required dependencies using: `npm install` (Ensure you have Node.js and npm installed)

### Running the Tests:

- In the root directory of the project, run the test command: `npm test [whateverthefileiscalled.test.js]`
- This will execute the test suite and display the results in your terminal.

### Interpreting Test Results:

- The terminal will show the number of tests passed and failed.
- For each failed test, an error message will provide details on what went wrong.

### Manual Testing:

- Beyond the automated tests, you can also test the application manually by running it: `npm start` or `node app.js`
- Follow the on-screen prompts to generate SVGs and visually inspect the output to ensure it aligns with your expectations.

### Reporting Bugs or Issues:

- If you find a bug or an issue while testing, please report it on the **Issues** tab of the GitHub repository.
- Provide as much detail as possible, including steps to reproduce, expected outcome, and actual outcome.

### Feedback:

- We appreciate feedback on the testing process itself. If you have suggestions to improve the tests or find any inconsistencies, please open an issue or contribute directly!

<a href="#table-of-contents">Back to Table of Contents</a>
## Portfolio

Visit my portfolio:
[Visit my portfolio](https://alghaibb-portfolio.vercel.app/)

<a href="#table-of-contents">Back to Table of Contents</a>
## License

This application is covered under the following licence:
<p><img src="https://img.shields.io/static/v1?label=License&message=MIT&color=blue" alt="License"></p>

