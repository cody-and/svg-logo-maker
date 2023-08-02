const fs = require('fs');
const inquirer = require('inquirer');
const { SVG } = require('@svgdotjs/svg.js');

// Define the generateLogo function as an async function
async function generateLogo() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: function (input) {
          return input.length > 0 && input.length <= 3;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal number):',
      },
    ]);

    const { text, textColor, shape, shapeColor } = answers;

    const svgWidth = 300;
    const svgHeight = 200;
    const canvas = SVG().size(svgWidth, svgHeight);

    canvas.rect(svgWidth, svgHeight).fill('#FFFFFF');

    let shapeElement;
    if (shape === 'circle') {
      shapeElement = canvas.circle(100).center(svgWidth / 2, svgHeight / 2);
    } else if (shape === 'triangle') {
      shapeElement = canvas.polygon('50,0 0,100 100,100').center(svgWidth / 2, svgHeight / 2);
    } else if (shape === 'square') {
      shapeElement = canvas.rect(100, 100).center(svgWidth / 2, svgHeight / 2);
    }

    shapeElement.fill(shapeColor);

    canvas.text(text).font({ fill: textColor }).center(svgWidth / 2, svgHeight / 2);

    fs.writeFileSync('logo.svg', canvas.svg());

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error generating the logo:', error);
  }
}

generateLogo();
