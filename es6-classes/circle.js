/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius ** 2, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return `radius:${this.radius} ${super.describe()}`;
  }
}

const newCircle = new Circle(7);
console.log('newCircle.describe()', newCircle.describe());
