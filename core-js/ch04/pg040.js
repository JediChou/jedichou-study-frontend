// File: pg040.js
// Description: 函数的参数

// 按指定长度将文本统一转成小写或大写
var adPrint = function(str, len, option) {
    var s = str || 'default';
    var l = len || s.length;
    var o = option || 'i';

    s = s.substring(0, l);
    switch (o) {
        case 'u':
            s = s.toUpperCase();
            break;
        case 'l':
        case 'i':
            s = s.toLowerCase();
            break;
        default:
            break;
    }

    console.log(s);
}

// 输出
adPrint('Hello, world');
adPrint('Hello, world', 5);
adPrint('Hello, world', 5, 'l');
adPrint('Hello, world', 5, 'u');