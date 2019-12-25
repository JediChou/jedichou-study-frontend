test('定义 - 字符串连接', function() {
    firstName = "Nicholas";
    lastName = "Zakas";
    equals(firstName + " " + lastName, "Nicholas Zakas"); 
})

test('定义 - 字符串普通确认', function() {
    text = "This is the letter sigma: \u03a3.";
    equals(text, "This is the letter sigma: \u03a3."); 
})
