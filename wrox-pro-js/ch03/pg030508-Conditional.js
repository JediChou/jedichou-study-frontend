test('conditional - conditional operator', function() {
    str1 = (1 < 2) ? "StringA" : "StringB";
    str2 = (1 > 2) ? "StringA" : "StringB";
    equals(str1, "StringA");
    equals(str2, "StringB");
})
