/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  describe() {
    return `width:${this.width} ${super.describe()} `;
  }
}

const newSquare = new Square(10);
console.log('newSquare.describe()', newSquare.describe());
