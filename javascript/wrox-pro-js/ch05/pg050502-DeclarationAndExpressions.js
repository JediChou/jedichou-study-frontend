test('declaration & expressions - lastest define', function() {
    equals(sum(10,10), 20);
    function sum(num1, num2) {return num1 + num2;}
})

test('declaration & expressions - value define', function() {
     try {
         equals(sum(10,10), 20);
         sum = function(num1, num2) {return num1 + num2;}
     } catch(e){ ok(e); }
})
