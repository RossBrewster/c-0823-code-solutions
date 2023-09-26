/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.radius = radius;
    super.area = Math.PI * radius ** 2;
    super.perimeter = 2 * Math.PI * radius;
  }

  describe() {
    return `radius:${this.radius} ${super.describe()}`;
  }
}

const newCircle = new Circle(7);
console.log('newCircle.describe()', newCircle.describe());
