// 1.1 缩略标记 - 这并不是关联数组

// 定义
var car = new Array();
car['color'] = 'red';
car['wheels'] = 4;
car['hubcaps'] = 'spinning';
car['age'] =4;

// 输出
console.log(car['color']);
console.log(car['wheels']);
console.log(car['hubcaps']);
console.log(car['age']);

// 注意下行的输出
car.push('value of car[0]');
console.log("car[0] is '" + car[0] + "'");
