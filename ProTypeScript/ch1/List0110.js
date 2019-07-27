// File: List0110.ts
// Ref: Apress Pro TypeScript
// Listing 1-10. Flags
// Jedi: Bit operation
var DiscFlags;
(function (DiscFlags) {
    DiscFlags[DiscFlags["None"] = 0] = "None";
    DiscFlags[DiscFlags["Drive"] = 1] = "Drive";
    DiscFlags[DiscFlags["Influence"] = 2] = "Influence";
    DiscFlags[DiscFlags["Steadiness"] = 4] = "Steadiness";
    DiscFlags[DiscFlags["Conscientiousness"] = 8] = "Conscientiousness";
})(DiscFlags || (DiscFlags = {}));
// Using flags
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;
// Test flags
console.log((personality & DiscFlags.Drive) == DiscFlags.Drive);
console.log((personality & DiscFlags.Influence) == DiscFlags.Influence);
console.log((personality & DiscFlags.Steadiness) == DiscFlags.Steadiness);
console.log((personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness);
