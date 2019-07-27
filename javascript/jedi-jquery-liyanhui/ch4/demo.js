// url: http://edu.51cto.com/lesson/id-14460.html
// 选择器引擎（继承了CSS语法）
// Basic: xhtml+css

//////////////////////////
// 1. 简单选择器
//////////////////////////

    ///////////////////////////////////////
    //// ID选择器
    //$(function(){
    //    // 添加一个行为
    //    $('#box').css('color', 'blue');
    //});

    ///////////////////////////////////////
    // 标签选择器
    //$(function(){
    //    // 添加一个行为
    //    $('div').css('color', 'blue');
    //});

    ///////////////////////////////////////
    // 类选择器
    //$(function(){
    //    // 添加一个行为
    //    $('.pox').css('color', 'blue');
    //});

    ///////////////////////////////////////
    // ID 若有多个
    //$(function(){
    //    // 若ID有多个，起变化的只有一个
    //    // css中用#box，会让三个都变成蓝色
    //    $('#box').css('color', 'blue');
    //});

    ///////////////////////////////////////
    // length and size
    //$(function(){
    //    // use id to filter
    //    console.log($('#box').length);
    //    console.log($('#box').size());
    //});

    ///////////////////////////////////////
    //$(function(){
    //    // use class to filter
    //    console.log($('.pox').length);
    //    console.log($('.pox').size());
    //});

    ///////////////////////////////////////
    //$(function(){
    //    // use class tag filter
    //    console.log($('div').length);
    //    console.log($('div').size());
    //    console.log($('div').get(1));
    //    // $($('div').get(1)).css('color', 'red');
    //    $('div').eq(1).css('color', 'red');  // 与上一行一致
    //});

    ///////////////////////////////////////
    // jquery css selector don't support ie6
    // 使用#box2 > p来过滤
    //$(function(){
    //    $('#box2 > p').css('color', 'red');
    //});

    ///////////////////////////////////////
    // jquery的容错功能
    // 主要用于动态生成某个元素
    //$('#box').css('color', 'red');    // 不报错
    //document.getElementById('box').style.color = 'red';  // 报错
    //
    // 性能角度可以预先做个判断
    //if($('#box').size() > 0) {
    //    $('#box').css('color', 'red')
    //}
    //
    // 通过下标来获得
    //if($('#pox').get(0)) {}
    //
    // 这也是通过下标来获得，但却是不推荐
    // if ($('#box')[0]) {}

// 2. 进阶选择器
// 3. 高级选择器
