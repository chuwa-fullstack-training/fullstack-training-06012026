class Shape {
  constructor() {
    this.type = "shape";
  }
  getType() {
    return this.type;
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    super();
    this.type = "triangle";
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}
let tri = new Triangle(3, 4, 5);
console.log(tri.getPerimeter());
console.log(tri.getArea());

class Circle extends Shape {
  constructor(r) {
    super();
    this.type = "circle";
    this.r = r;
  }
  getArea() {
    const pi = Math.PI;
    return this.r * this.r * pi;
  }
  getPerimeter() {
    const pi = Math.PI;
    return 2 * this.r * pi;
  }
}
let cir = new Circle(3);
console.log(cir.getArea());
console.log(cir.getPerimeter());
