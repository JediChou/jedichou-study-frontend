// File: List0128.ts
// Ref: Apress Pro TypeScript
// Listing 1-28. Overloads

// function signture
function getAvg(a: string, b: string, c: string): string;
function getAvg(a: number, b: number, c: number): string;

// implement signture
function getAvg(a: any, b:any, c: any): string {
    var total = parseInt(a,10) + parseInt(b,10) + parseInt(c,10);
    var average = total / 3;
    return 'The average is ' + average;
}

console.log(getAvg(4,3,8));
console.log(getAvg('20','30','60'));