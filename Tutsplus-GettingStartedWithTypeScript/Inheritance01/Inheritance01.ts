// File: Inheritance01.ts
// From: 
//   Tutsplus - Getting Started with TypeScript
//   3.2. Inheritance (Sub-Classing)

/**
 * Polygon
 */
class Polygon {
    witdth: number;
    constructor(num: number) {
        this.witdth = num;
    }
    getArea(): number {
        return 0;
    }
}

/**
 * Triangle
 */
class Triangle extends Polygon {
    base: number;
    constructor(num: number, base: number) {
        super(num);
        this.base = base;
    }
    getArea(): number {
        return .5 * this.witdth * this.base;
    }
}

/**
 * Retangle
 */
class Retangle extends Polygon {
    length: number;
    constructor(width: number, length: number) {
        super(width);
        this.length = length;
    }
    getArea(): number {
        return this.witdth * this.length;
    }
}

/**
 * Square
 */
class Square extends Retangle {
    constructor(width: number) {
        super(width, width)
    }
}


// create some ploygon instance
let triangle = new Triangle(20, 30);
let retangle = new Retangle(30, 40);
let sqaure = new Square(30);

// output there area
console.log("Triangle area:", triangle.getArea());
console.log("Retangle area:", retangle.getArea());
console.log("Square area:", sqaure.getArea());
