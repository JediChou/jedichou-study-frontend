test('RegExp - exec() 1', function() {
    text = "mom and dad and baby";
    patn = /mom( and dad( and baby)?)?/gi;
    machers = patn.exec(text);
    
    equals(machers.index, 0);
    equals(machers.input, "mom and dad and baby");
    equals(machers[0], "mom and dad and baby");
    equals(machers[1], " and dad and baby");
    equals(machers[2], " and baby");
})

test('RegExp - exec() 2', function() {
    text = 'cat, bat, sat, fat';
    pattern = /.at/;
    matches = pattern.exec(text);
    
    equals(matches.index, 0);
    equals(matches[0], 'cat');
    equals(pattern.lastIndex, 0);
    // TODO need study ...
})
