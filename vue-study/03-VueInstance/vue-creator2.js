/**
 * Created by Jedi on 2017/1/9.
 * vue.js的构造器2
 */

/**
 * 在实例化 Vue 时，需要传入一个选项对象，它可以包含数据、
 * 模板、挂载元素、方法、生命周期钩子等选项。全部的选项可
 * 以在 API 文档中查看。
 *
 * 可以扩展 Vue 构造器，从而用预定义选项创建可复用的组件
 * 构造器：
 */
var MyComponent = Vue.extend({
    // 扩展选项
})

// 所有的`MyComponent`实例都将以预定义的扩展选项被创建
var myComponentInstance = new MyComponent();