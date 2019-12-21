// File: funs6.ts
// From: 
//   Tutsplus - Getting Started with TypeScript
//   Getting Started with TypeScript - 3.4. Functions and Overloads

class Foo {
    
    /**
     * Calculate method
     * @param a First Parameter
     * @param b Second Parameter
     */
    calculate(a: number, b: number): number
    calculate(a: string, b: string): string
    calculate(a, b): any {
        if (typeof a == "string" && typeof b == "string")
            return a + " " + b;
        return a + b;
    }

    /**
     * Log method. It is a help method for console output.
     * @param m1 First message
     * @param m2 Second message
     */
    log(m1: any, m2: any): void {
        let t: any = this.calculate(m1, m2);
        console.log(t);
    }
}

let instance = new Foo();
instance.log(1,2);
instance.log("Jedi", "Chou");
