test('RegExp - RegExp Instance Properties - 1', function() {
    pattern = /\[bc\]at/i;
    equals(pattern.global, false);
    equals(pattern.ignoreCase, true);
    equals(pattern.multiline, false);
    equals(pattern.lastIndex, 0);
    equals(pattern.source, "\\[bc\\]at");  // notice
})
            
test('RegExp - RegExp Instance Properties - 2', function() {
    pattern = new RegExp("\\[bc\\]at", "i");
    equals(pattern.global, false);
    equals(pattern.ignoreCase, true);
    equals(pattern.multiline, false);
    equals(pattern.lastIndex, 0);
    equals(pattern.source, "\\[bc\\]at");
})
