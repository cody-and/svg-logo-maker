const { Circle, Triangle, Square } = require('./shapes');

test('Circle.render() should return SVG string with the given shape color', () => {
  const shape = new Circle();
  shape.setColor('green');
  const expectedSVG = '<circle cx="150" cy="100" r="50" fill="green" />';
  expect(shape.render()).toEqual(expectedSVG);
});



test('Square.render() should return SVG string with the given shape color', () => {
  const shape = new Square();
  shape.setColor('#FF0000');
  const expectedSVG = '<rect x="75" y="50" width="150" height="100" fill="#FF0000" />';
  expect(shape.render()).toEqual(expectedSVG);
});



test('Triangle.render() should return SVG string with the given shape color', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
  expect(shape.render()).toEqual(expectedSVG);
});