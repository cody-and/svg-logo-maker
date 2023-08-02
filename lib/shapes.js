class Circle {
  constructor() {
    this.shapeColor = '';
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />`;
  }
}

class Triangle {
  constructor() {
    this.shapeColor = '';
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

class Square {
  constructor() {
    this.shapeColor = '';
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<rect x="75" y="50" width="150" height="100" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
