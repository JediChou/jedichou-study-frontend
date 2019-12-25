test('Math object - property of math object', function() {
    var propertys = [
        Math.E, Math.LN2, Math.LOG2E, Math.LOG10E, 
        Math.PI, Math.SQRT1_2, Math.SQRT2
    ];
     for(property in propertys) { ok(property) }
})

test('Math object - property of min/max method', function() {
    equals(Math.max(1,2,3,54), 54);
    equals(Math.min(1,2,3,54), 1);
})

test('Math object - rounding method', function() {
    // ceil method
    equals(Math.ceil(25.9), 26);
    equals(Math.ceil(25.5), 26);
    equals(Math.ceil(25.1), 26);
    
    // round method
    equals(Math.round(25.9), 26);
    equals(Math.round(25.5), 26);
    equals(Math.round(25.4), 25);
    equals(Math.round(25.1), 25);
    
    // floor method
    equals(Math.floor(25.9), 25);
    equals(Math.floor(25.5), 25);
    equals(Math.floor(25.1), 25);
})

test('Math Object - random method', function() {
    ok(Math.random() > 0);
    ok(Math.random() < 1);
    
    var num = Math.floor(Math.random() * 10 + 1);
    ok(num >= 1);
    ok(num <= 10);
})

test('Math object - other method', function() {
    // classic math function
    ok(Math.abs(1));
    ok(Math.exp(1));
    ok(Math.log(2));
    ok(Math.pow(1, 2));
    ok(Math.sqrt(4));
    ok(Math.acos(Math.PI/360));
    
    // classic math function
    ok(Math.asin(Math.PI/360*45));
    ok(Math.atan(Math.PI/360*45));
    ok(Math.atan2(Math.PI/360, 45));
    ok(Math.cos(Math.PI/360*30));
    ok(Math.cos(Math.PI/360*30));
    ok(Math.cos(Math.PI/360*30));
})
