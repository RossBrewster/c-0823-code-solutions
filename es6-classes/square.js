/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width);
    this.width = width;
    super.area = width * width;
    super.perimeter = width * 4;
  }

  describe() {
    return `width:${this.width} ${super.describe()} `;
  }
}

const newSquare = new Square(10);
console.log('newSquare.describe()', newSquare.describe());
