// File: pg041.js
// Description: 使用伪参数arguments

var sum = function () {
    var result = 0;
    for (var i = 0, len = arguments.length; i < len; i++) {
        var current = arguments[i];
        if (isNaN(current)) {
            throw new Error('not a number exception');
        } else {
            result += current;
        }
    }

    return result;
}

// 带有异常处理的调用
try {
    console.log(sum(10, 20, 30));
    console.log(sum(20, 30, 40));
    console.log(sum('abc'));
} catch (error) {
    console.log('Error msg: 传参类型错误你知道不?');
}
