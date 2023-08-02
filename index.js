const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

function generateLogo(text, textColor, shape, shapeColor) {
  let shapeSVG;
  
  switch (shape) {
    case 'circle':
      shapeSVG = new Circle(shapeColor).render();
      break;
    case 'triangle':
      shapeSVG = new Triangle(shapeColor).render();
      break;
    case 'square':
      shapeSVG = new Square(shapeColor).render();
      break;
    default:
      throw new Error('Invalid shape provided.');
  }

  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSVG}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="60">${text}</text>
  </svg>`;
}

function saveLogoToFile(svgMarkup) {
  fs.writeFile('logo.svg', svgMarkup, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error('Error while saving the logo:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

function start() {
  inquirer
    .prompt([
      {
        name: 'text',
        message: 'Enter up to three characters:',
        validate: function (input) {
          return input.length <= 3 ? true : 'Text should be up to three characters long';
        },
      },
      {
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):',
      },
    ])
    .then((answers) => {
      const { text, textColor, shape, shapeColor } = answers;
      const svgMarkup = generateLogo(text, textColor, shape, shapeColor);
      saveLogoToFile(svgMarkup);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Start the application
start();
