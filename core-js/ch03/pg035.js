// File: pg035.js
// Description: 依旧使用原型链, 但返回多个值(匿名对象)

function Point(left, top) {
    this.left = left;
    this.top = top;

    // 本质上这里使用的依旧是原型
    return {x: this.left, y:this.top};
}

// 没有那么麻烦
var pos = Point(3, 4);
console.log(pos.x);
console.log(pos.y);

// 反而没有, 故要好好理解
console.log(pos.left);
console.log(pos.top);