// File: List0119.ts
// Ref: Apress Pro TypeScript
// Listing 1-19. AND operator
function and_Longhand() {
    if (console)
        console.log('Console Available');
}
function and_Shorthand() {
    console && console.log('Console Available');
}
function stringConcat() {
    var player1 = "Martin";
    var player2 = player1 && 'Dan';
    console.log(player2);
}
and_Longhand();
and_Shorthand();
stringConcat();
