// url: http://edu.51cto.com/lesson/id-14464.html
// 选择器引擎（继承了CSS语法）
// Basic: xhtml+css

$(function(){
//////////////////////////
// 过滤器-第一讲
//////////////////////////

    ///////////////////////////////////////
    // 伪类(实际是基于CSS3中伪类选择器)
    //   可参考：http://t.mb5u.com/css3
    // 也即：jQuery过滤器，实际就是CSS3中的伪类选择器
    // 也即：所有的过滤器均以冒号开头

    ///////////////////////////////////////
    // 1. 基本过滤器

    // example 8.1
    //$('li:first').css('background', '#ccc');

    // example 8.2
    // $('li:last').css('background', '#ccc');

    // example 8.3
    //$('#box li:last').css('background', '#ccc');
    //$('ul:first li:last').css('background', '#ccc');

    // example 8.4
    //$('li:not(.special)').css('background', '#ccc');

    // example 8.5
    //$('li:even').css('background', '#ccc');

    // example 8.6
    //$('li:odd').css('background', '#ccc');

    // example 8.7
    //$('li:eq(3)').css('color', 'red');

    // example 8.8
    //$('li:gt(2)').css('color', 'red');

    // example 8.9
    //$('li:lt(4)').css('color', 'red');

    // example 8.10
    // notice: :header代表全局所有的header标签
    //$(':header').css('color', 'red');
    //$('div :header').css('color', 'red');  // notice:div和:header之间有空格

    // example 8.11
    //$('input').get(0).focus();
    //$('input:focus').css('color', 'red');

    // example 8.12
    // jquery提示更快的方式
    // $('li').first().css('background', '#ccc');

    // example 8.13
    // jquery提示更快的方式
    //$('li').last().css('background', '#ccc');

    // example 8.14
    // jquery提示更快的方式
    //$('li').not('.special').css('background', '#ccc');

    // example 8.15
    // jquery提示更快的方式
    //$('li').eq(3).css('color', 'red');

    ///////////////////////////////////////
    // 2. 内容过滤器

    // example 8.16
    //$('div:contains("1")').css('color', 'red');

    // example 8.17
    // div必须不包含任何文本、任何元素内容
    //console.log($('div:empty').length);

    // example 8.18
    //$('ul:has(".special")').css('color', 'red');

    // example 8.19
    // todo parent

    // example 8.20
    // jquery提供了has方法，另参考8.18
    //$('ul').has(".special").css('color', 'red');

    // example 8.21
    // notice: 返回父节点
    //$('li').parent().css('color', 'red');

    // example 8.22
    // notice: 返回更上层的父节点
    //$('li').parents().css('color', 'red');

    // example 8.23
    // notice: debug in the firebug
    //$('li').parentsUntil('body').css('color', 'red');
    //$('li').parentsUntil('html').css('color', 'red');

    ///////////////////////////////////////
    // 3. 可见性过滤器
    // :hidden
    //   3.1 css样式为display:none
    //   3.2 input表单类型为hidden
    //   3.3 visibility:hidden

    // example 8.24
    // notice: 选中隐藏的元素
    //console.log($('div:hidden').length);
    //$('div:hidden').show();

    // example 8.25
    // notice: 选中可见的元素
    //console.log($('div:visible').length);
    //$('div:visible').css('color', 'red');

    // 4. 子元素过滤器
    // 5. 其他方法

});
