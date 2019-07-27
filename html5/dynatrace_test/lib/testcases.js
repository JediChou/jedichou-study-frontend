'use strict';

// 生成测试用例集
function getAllTest() {

    var result = [];

    // 生成js用例集
    //   参考网址: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors
    //   参考网址: https://msdn.microsoft.com/en-us/library/7th8s2xk(v=vs.94).aspx
    var jsTests = [
		
		// 来自MDN的各类错误信息
        TestFactory('/jstest/test-mdn-error1.html', 'Error: Permission denied to access property "x"'),
        TestFactory('/jstest/test-mdn-error2.html', 'InternalError: too much recursion'),
        TestFactory('/jstest/test-mdn-error3.html', 'RangeError: argument is not a valid code point'),
        TestFactory('/jstest/test-mdn-error4.html', 'RangeError: invalid array length'),
        TestFactory('/jstest/test-mdn-error5.html', 'RangeError: precision is out of range'),
        TestFactory('/jstest/test-mdn-error6.html', 'RangeError: radix must be an integer'),
        TestFactory('/jstest/test-mdn-error7.html', 'RangeError: repeat count must be less than infinity'),
        TestFactory('/jstest/test-mdn-error8.html', 'RangeError: repeat count must be non-negative'),
        TestFactory('/jstest/test-mdn-error9.html', 'ReferenceError: "x" is not defined'),
        TestFactory('/jstest/test-mdn-error10.html', 'ReferenceError: assignment to undeclared variable "x"'),
        TestFactory('/jstest/test-mdn-error11.html', 'ReferenceError: deprecated caller or arguments usage'),
        TestFactory('/jstest/test-mdn-error12.html', 'ReferenceError: invalid assignment left-hand side'),
        TestFactory('/jstest/test-mdn-error13.html', 'ReferenceError: reference to undefined property "x"'),
        TestFactory('/jstest/test-mdn-error14.html', 'SyntaxError: "x" is not a legal ECMA-262 octal constant'),
    	TestFactory('/jstest/test-mdn-error15.html', 'SyntaxError: JSON.parse: bad parsing - JSON.parse() does not allow trailing commas'),
		TestFactory('/jstest/test-mdn-error16.html', 'SyntaxError: JSON.parse: bad parsing - Property names must be double-quoted strings'),
		TestFactory('/jstest/test-mdn-error17.html', 'SyntaxError: JSON.parse: bad parsing - Leading zeros and decimal points'),
		TestFactory('/jstest/test-mdn-error18.html', 'SyntaxError: Malformed formal parameter'),
		TestFactory('/jstest/test-mdn-error19.html', 'SyntaxError: Unexpected token'),
		TestFactory('/jstest/test-mdn-error20.html', 'SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead'),
		TestFactory('/jstest/test-mdn-error21.html', 'SyntaxError: missing ) after argument list'),
		TestFactory('/jstest/test-mdn-error22.html', 'SyntaxError: missing ; before statement - Unescaped strings'),
		TestFactory('/jstest/test-mdn-error23.html', 'SyntaxError: missing ; before statement - Declaring properties with var'),
		TestFactory('/jstest/test-mdn-error24.html', 'SyntaxError: missing ] after element list'),
		TestFactory('/jstest/test-mdn-error25.html', 'SyntaxError: missing } after property list'),
		TestFactory('/jstest/test-mdn-error26.html', 'SyntaxError: return not in function'),
		TestFactory('/jstest/test-mdn-error27.html', 'SyntaxError: test for equality (==) mistyped as assignment (=)?'),
		TestFactory('/jstest/test-mdn-error28.html', 'SyntaxError: unterminated string literal'),
		TestFactory('/jstest/test-mdn-error29.html', 'TypeError: "x" has no properties'),
		TestFactory('/jstest/test-mdn-error30.html', 'TypeError: "x" is (not) "y"'),
		TestFactory('/jstest/test-mdn-error31.html', 'TypeError: "x" is not a constructor - Invalid cases'),
		TestFactory('/jstest/test-mdn-error32.html', 'TypeError: "x" is not a constructor - In Promises'),
		TestFactory('/jstest/test-mdn-error33.html', 'TypeError: "x" is not a function - A typo in the function name'),
		TestFactory('/jstest/test-mdn-error34.html', 'TypeError: "x" is not a function - Function called on the wrong object'),
		TestFactory('/jstest/test-mdn-error35.html', 'TypeError: "x" is read-only'),
		TestFactory('/jstest/test-mdn-error36.html', 'TypeError: "x" is read-only'),
		TestFactory('/jstest/test-mdn-error37.html', 'TypeError: "x" is read-only'),
		TestFactory('/jstest/test-mdn-error38.html', 'TypeError: More arguments needed'),
		TestFactory('/jstest/test-mdn-error39.html', 'TypeError: More arguments needed'),
		TestFactory('/jstest/test-mdn-error40.html', 'TypeError: property "x" is non-configurable and can\'t be deleted'),
		TestFactory('/jstest/test-mdn-error41.html', 'TypeError: property "x" is non-configurable and can\'t be deleted'),
		TestFactory('/jstest/test-mdn-error42.html', 'TypeError: property "x" is non-configurable and can\'t be deleted'),
		TestFactory('/jstest/test-mdn-error43.html', 'TypeError: property "x" is non-configurable and can\'t be deleted'),
		TestFactory('/jstest/test-mdn-error44.html', 'TypeError: variable "x" redeclares argument'),
		TestFactory('/jstest/test-mdn-error45.html', 'Warning: unreachable code after return statement')
    ];

    // 生成html用例集
    var htmlTests = [
		TestFactory('/htmltest/html-error1.html', '加载不存在的js文件'),
		TestFactory('/htmltest/html-error2.html', '非闭合标签'),
		TestFactory('/htmltest/html-error3.html', '根本就不支持的标签')
	];

    // 生成css用例集
    var cssTests = [
		TestFactory('/csstest/css-error1.html', '加载不存在的css文件')
	];

    // 合并测试用例集
    result = result.concat(jsTests);
    result = result.concat(htmlTests);
    result = result.concat(cssTests);

    return result;
}