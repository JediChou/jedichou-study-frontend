// File: List0133.ts
// Ref: Apress Pro TypeScript
// Listing 1-33. Preserving scope with arrow syntax

var ScopeLosingExample = {
    text: "Property from lexical",
    run: function() {
        setTimeout(function(){
            console.log(this.text);
        }, 1000);
    }
};

// alerts undefined
ScopeLosingExample.run();

////////////////////////////////////////////////

var ScopePreservingExample = {
    text: "Property from lexical scope",
    run: function() {
        setTimeout(()=>{
            console.log(this.text);
        }, 1000);
    }
};
ScopePreservingExample.run();