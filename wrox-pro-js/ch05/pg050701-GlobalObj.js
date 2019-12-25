test('Global object - URI encode method', function() {
    // encodeURI() -> process spacebar
    // encodeURIComponent() -> process non-alphanumeric
    
    var uri = "http://www.wrox.com/illegal value.htm#start";
    result1 = encodeURI(uri);
    result2 = encodeURIComponent(uri);
    equals("http://www.wrox.com/illegal%20value.htm#start", result1);
    equals("http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start" ,result2);
})

test('Global object - URI decode method', function() {
    var uri_code1 = "http://www.wrox.com/illegal%20value.htm#start";
    var uri_code2 = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
    equals("http://www.wrox.com/illegal value.htm#start", decodeURI(uri_code1));
    equals("http://www.wrox.com/illegal value.htm#start", decodeURIComponent(uri_code2));
})

test('Global object - eval method', function() {
    var msg = "hello world";
    ok(eval("'msg' != 'ms'"));
})

test('Global object - eval method', function() {
    eval("function getnum(){return 2}");
    eval("function geture(){return true}")
    equals(2, getnum());
    equals(true, geture());
})

test('Global object - windows object', function() {
    // TODO : failed
    var jc_color = "red";
    function sayColor() {
		// return window.jc_color;
		return window.jc_color;
	}
	var factResult = sayColor();
    equals("red", factResult);
})
