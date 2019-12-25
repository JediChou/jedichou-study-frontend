test('concat method', function() {
    colors1 = ["red", "green", "blue"];
    colors2 = colors1.concat("yellow", ["black", "brown"]);
    equals(colors2, "red,green,blue,yellow,black,brown");
})

test('slice method', function() {
    colors = ["red", "green", "blue", "yellow", "purple"];
    colors1 = colors.slice(1);
    colors2 = colors.slice(1, 4);
    equals(colors1, "green,blue,yellow,purple");
    equals(colors2, "green,blue,yellow");
})
            
test('splice method', function() {
    colors = ["red", "green", "blue"];
    removed = colors.splice(0, 1);
    equals(colors, "green,blue");
    equals(removed,"red");
                
    removed = colors.splice(1,0,"yellow","orange");
    equals(colors, "green,yellow,orange,blue");
    equals(removed, "");
                
    removed = colors.splice(1,1,"red","purple");
    equals(colors, "green,red,purple,orange,blue");
    equals(removed, "yellow");
})
