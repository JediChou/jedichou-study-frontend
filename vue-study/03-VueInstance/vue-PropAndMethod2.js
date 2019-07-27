/**
 * Created by F3216338 on 2017/1/9.
 * 实例属性和方法

 */

var data = {a:1}
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data; // -> true
vm.$el === document.getElementById('example'); // -> true
// $watch 是一个实例方法
vm.$watch('a', function(newVal, oldVal){
    // 这个回调将在`vm.a` 改变后调用
});