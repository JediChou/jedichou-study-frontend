/**
 * Created by F3216338 on 2017/1/9.
 * 每个Vue示例都会代理其data对象里的所有属性
 */

var data = {a:1};
var vm = new Vue({
    data: data
});

vm.a === data.a; // -> true

// Jedi: 是一种双向绑定
// 设置属性也会影响到原始数据
vm.a = 2;
data.a // -> 2

// ... 反之亦然
data.a = 3
vm.a // -> 3