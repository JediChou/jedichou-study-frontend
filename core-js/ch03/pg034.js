// File: pg034.js
// Description: 对象字面量

// 这种结构其实更为常用
// 原因: json序列化很容易
var obj = {
    name: 'Sammy',
    age: 20,
    birthday: new Date(1984, 4, 5),
    addr : {
        stree: "HUang Quan road",
        xno: '135'
    }
}

// 输出
console.log(obj.name);
console.log(obj.age);
console.log(obj.birthday);
console.log(obj.addr.stree);
console.log(obj.addr.xno);