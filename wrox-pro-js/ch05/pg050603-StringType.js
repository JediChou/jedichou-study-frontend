test('The String Type - description', function() {
    var stringObject = new String('hello world');
    equals(stringObject.length, 11);
})

test('The String Type - Character methods', function() {
    var stringObject = 'hello world';
    equals(stringObject.charAt(1), 'e');
    equals(stringObject.charCodeAt(1), '101');
    equals(stringObject[1], 'e');
})

test('The String Type - String-Manipulation methods', function() {
    // concat
    var stringValue1 = 'hello ';
    var result1 = stringValue1.concat("world");
    equals(result1, 'hello world');
    equals(stringValue1, 'hello ');
    
    var stringValue2 = 'hello ';
    var result2 = stringValue2.concat("world", " !");
    equals(result2, 'hello world !');
    
    // slice(), substring(), substr()
    var stringValue3 = 'hello world';
    equals(stringValue3.slice(3), 'lo world');
    equals(stringValue3.substring(3), 'lo world');
    equals(stringValue3.substr(3), 'lo world');
    equals(stringValue3.slice(3,7), 'lo w');
    equals(stringValue3.substring(3, 7), 'lo w');
    equals(stringValue3.substr(3, 7), 'lo worl');
    
    // slice(), substring(), substr()
    var stringValue4 = 'hello world';
    equals(stringValue4.slice(-3), 'rld');
    equals(stringValue4.substring(-3), 'hello world');
    equals(stringValue4.substr(-3), 'rld');
    equals(stringValue4.slice(3, -4), 'lo w');
    equals(stringValue4.substring(3, -4), 'hel');
    equals(stringValue4.substr(3, -4), "");
})

test('The String type - String location method', function() {
    var stringValue1 = 'hello world';
    equals(stringValue1.indexOf("o"), 4);
    equals(stringValue1.lastIndexOf("o"), 7);
    equals(stringValue1.indexOf("o", 6), 7);
    equals(stringValue1.lastIndexOf("o", 6), 4);
    
    var stringValue2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
    var positions = new Array();
    var pos = stringValue2.indexOf("e");
    while(pos > -1) {
        positions.push(pos);
        pos = stringValue2.indexOf("e", pos + 1);
    }
    equals(positions, "3,24,32,35,52");
})

test('The String type - String case method', function() {
    var stringValue = "hello world";
    equals(stringValue.toLocaleUpperCase(), 'HELLO WORLD');
    equals(stringValue.toUpperCase(), 'HELLO WORLD');
    equals(stringValue.toLocaleLowerCase(), 'hello world');
    equals(stringValue.toLowerCase(), 'hello world');
})

test('The String type - String Pattern-Matching methods', function() {
    var text = 'cat, bat, sat, fat';
    var pattern = /.at/;
    var matches = text.match(pattern);
    equals(matches.index, 0);
    equals(matches[0], 'cat');
    equals(pattern.lastIndex, 0);
})

test('The string type - String Pattern-Matching methods', function() {
    var text = "cat, bat, sat, fat";
    result = text.replace(/(.at)/g, "word ($1)");
    equals("word (cat), word (bat), word (sat), word (fat)", result);
})

test('The string type - String Pattern-Matching methods', function() {
    var text1 = "<>&\"";
    result = text1.replace(/[<>"&]/g, function(match) {
        switch(match) {
            case "<": return "&lt;" ;
            case ">": return "&gt;";
            case "&": return "&amp;";
            case "\"": return "&quot;"
        }
    });
    equals("&lt;&gt;&amp;&quot;", result);
})

test('The string type - String Pattern-Matching methods', function() {
    var colorText = "red,blue,green,yellow";
    
    colors1 = colorText.split(",");
    equals("red", colors1[0]);
    equals("blue", colors1[1]);
    equals("green", colors1[2]);
    equals("yellow", colors1[3]);

    colors2 = colorText.split(",", 2);
    equals("red", colors2[0]);
    equals("blue", colors2[1]);
    equals(null, colors2[3]);
    
    colors3 = colorText.split(/[^\,]+/);
    equals("", colors3[0]);
    equals(",", colors3[1]);
    equals(",", colors3[2]);
    equals(",", colors3[3]);
    equals("", colors3[4]);
})

test('The string type - localeCompare method', function() {
    var stringValue = "yellow";
    ok(stringValue.localeCompare("brick") >= 1);
    ok(stringValue.localeCompare("zooo") <= 1);
    equals(0, stringValue.localeCompare("yellow"));
})

test('The string type - fromCharCode method', function() {
    equals("hello", String.fromCharCode(104, 101, 108, 108,111));
})

test('The string type - the HTML method', function() {
    // These method does not exist now !
    // anchor(name) -> <a name="name">string</a>
    // big() -> <big>string</big>
    // bold() -> <b>string</b>
    // fixed() -> <tt>string</tt>
    // fontcolor(color) -> <font color="color">string</font>
    // fontsize(size) -> <font size="size">string</font>
    // italics() -> <i>string</i>
    // link(url) -> <a href="url">string</a>
    // small() -> <small>string</small>
    // strike() -> <strike>string</strike>
    // sub() -> <sub>string</sub>
    // sup() -> <sup>string</sup>
})
