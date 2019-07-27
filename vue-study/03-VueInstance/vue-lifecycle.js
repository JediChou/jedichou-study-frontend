/**
 * Created by F3216338 on 2017/1/9.
 * vue.js的生命周期
 * 过程: created, beforeCompile, compiled, ready, beforeDestroy, Destroyed
 */

var vm = new Vue({
    data: {
        a: 1
    },
    created: function() {
        // `this`指向vm实例
        console.log('a is: ' + this.a);
    }
});
// -> "a is: 1"