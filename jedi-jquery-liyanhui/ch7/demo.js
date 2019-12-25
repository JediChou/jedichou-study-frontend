// url: http://edu.51cto.com/lesson/id-14463.html
// 选择器引擎（继承了CSS语法）
// Basic: xhtml+css

$(function(){
//////////////////////////
// 3. 高级选择器-第二讲
//////////////////////////

    ///////////////////////////////////////
    // 速度比较

    // 后代选择器
    // $('#box').find('p');  // 这种方式最快

    // example 7.1 后代选择器
    //$('#box p').css('color', 'red');  // css模式
    //$('p', '#box').css('color', 'red');  // 高级选择器, 性能差到5-10%

    // example 7.2 children
    // 比find()要慢50%
    //$('#box').children('p').css('color', 'red');
    //$('#box > p').css('color', 'red');  // 这是高级选择器，会使用sizzel引擎，会比较慢(会比最快的慢70%)

    // example 7.3
    //$('#box p').css('color', 'red');  // 会使用sizzel引擎，会比更慢(会比最快的慢77%)

    // example 7.4 嵌套的选择器
    //$('p', $('#box')).css('color', 'red');

    // 经过7.1-7.4，可以有结论结论：最快的是find; 最快的是$('#box p')

    ///////////////////////////////////////
    // 属性选择器（一般用于超链接）
    // MEMO: 大部分IE6都不支持

    // example 7.5
    //$('a[title]').css('color', 'red');  // 有属性就可被选择到

    // example 7.6
    //$('a[title=URL-A]').css('color', 'red');  // 有属性且值相等就可被选择到

    // example 7.7
    //$('a[title^=URL]').css('color', 'red');  // 有属性且值开发头匹配即可

    // example 7.8
    //$('a[title$=E]').css('color', 'red');  // 有属性且值结尾匹配即可

    // example 7.9
    //$('a[title|=URL]').css('color', 'red');  // 部分匹配即可

    // example 7.10
    //$('a[title!=URL-A]').css('color', 'red');  // 不等于URL-A就会被选中

    // example 7.11
    //$('a[title~=aaa]').css('color', 'red');  // 有空格的属性列表

    // example 7.12
    //$('a[title*=aaa]').css('color', 'red');  // 包含字串

    // example 7.13
    //$('a[bbb][title^=URL]').css('color', 'red');

});
