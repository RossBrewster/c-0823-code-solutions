/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    const description = 'Area:' + this.area + ' Perimeter:' + this.perimeter;
    return description;
  }
}

const newShape = new Shape(16, 16);
console.log('newShape.describe()', newShape.describe());
