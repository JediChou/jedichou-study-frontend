test('change color', function() {
    var color = "blue";
    function changeColor() {
        if (color === "blue")
            color = "red";
        else
            color = "blue";
    }
    
    changeColor();
    equals(color, "red");
})
        
test('other change method', function() {
    var color2 = "blue";
    function changeColor2() {
        var anotherColor = "red";
        function swapColors() {
            var tempColor = anotherColor;
            anotherColor = color2;
            color2 = tempColor;
        }
        swapColors();
    }
    
    changeColor2();
    equals(color2, "red");
})
