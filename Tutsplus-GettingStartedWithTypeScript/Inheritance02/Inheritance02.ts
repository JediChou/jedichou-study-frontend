// File: Inheritance02.ts
// From: 
//   Tutsplus - Getting Started with TypeScript
//   3.2. Inheritance (Sub-Classing)

/**
 * Point class
 */
class Point {

    /**
     * Point class constructor
     * @param x Point's x aixs value
     * @param y Point's y axis value
     */
    constructor(
        private x: number,
        private y: number) {
    }

    /**
     * Getter method for X property
     */
    get X() {
        return this.x;
    }

    /**
     * Setter method for Y property
     */
    set X(value) {
        this.x = value;
    }

    get Y() {
        return this.y;
    }

    set Y(value) {
        this.y = value;
    }

    add(p2: Point): Point {
        return new Point(
            this.X + p2.X,
            this.Y + p2.Y
        );
    }
}

/**
 * ThreeDPoint class
 */
class ThreeDPoint extends Point {

    constructor(
        x: number,
        y: number,
        private z: number
    ) {
        super(x, y);
    }

    get Z() {
        return this.z;
    }

    set Z(value) {
        this.z = value;
    }

    add(point: ThreeDPoint): ThreeDPoint {
        return new ThreeDPoint(
            this.X + point.X,
            this.Y + point.Y,
            this.Z + point.Z
        );
    }
}

function output3dpoint(point: ThreeDPoint | null): string {
    if (point != undefined || point != null) {
       return [
           "x:", point.X.toString(),
           ", y:", point.Y.toString(),
           ", z:", point.Z.toString()
       ].join(' ');
    }
}

let point1 = new Point(1, 2);
let point2 = new Point(2, 4);
let point3 = point1.add(point2);
console.log("First Point:  x:", point1.X, ", y:", point1.Y);
console.log("Second Point: x:", point2.X, ", y:", point2.Y);
console.log("Third Point:  x:", point3.X, ", y:", point3.Y);

let first_3dpoint = new ThreeDPoint(4, 5, 6);
let second_3dpoint = new ThreeDPoint(7, 8, 9);
let third_3dpoint = first_3dpoint.add(second_3dpoint);
console.log();
console.log("first_3dpoint ->", output3dpoint(first_3dpoint));
console.log("second_3dpoint ->", output3dpoint(second_3dpoint));
console.log("third_3dpoint ->", output3dpoint(third_3dpoint));