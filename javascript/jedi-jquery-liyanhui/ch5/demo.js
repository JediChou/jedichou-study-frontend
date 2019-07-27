// url: http://edu.51cto.com/lesson/id-14461.html
// 选择器引擎（继承了CSS语法）
// Basic: xhtml+css

$(function(){
//////////////////////////
// 2. 进阶选择器
//////////////////////////


    /////////////////////////////
    // 群组选择器

    // Example 5.1: 标记三个元素的颜色为红色
    //$('div, p, strong').css('color', 'red');

    // Example 5.2: mix ID, classname
    //$('#box, .pox, strong').css('color', 'red');

    /////////////////////////////
    // 后代选择器

    // Example 5.3: 后代选择器基本实例
    //$('ul li a').css('color', 'red');

    /////////////////////////////
    // 通配选择器

    // Example 5.4: 通配符选择器基本实例
    //$('*').css('color', 'red');
    //console.log($('*').size());
    //console.log($('*')[0].nodeName);
    // 全局范围不建议使用通配符

    // Example 5.5:
    //$('ul li a, ul li span, ul li em').css('color', 'red');
    //$('ul li *').css('color', 'red');

    // Example 5.6: 带有前缀的过滤
    //$('div.box').css('color', 'red');

    // Example 5.7: 带有前缀的过滤(更复杂一些)
    //$('.box.pox').css('color', 'red');

    // Example 5.8: 必须注意的特性
    // $('div#box p ul li a#link');  // 可以，带性能越来越差

});
