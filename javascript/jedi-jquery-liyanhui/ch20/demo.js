// url, http://edu.51cto.com/lesson/id-14478.html

$(function(){
//////////////////////////
// 高級事件（上）
//////////////////////////

    //////////////////////////
    // 1. 模擬操作

    // todo,  example 20.1

    // 方式1
    // $('input').click(function(e){ alert("使用模擬操作"); });
    // $('input').trigger('click');

    // 方式2
    // $('input').click(function(e){ alert("使用模擬操作"); }).trigger('click');

    // todo, example 20.2
    // 用trigger()來傳遞數據
    // trigger()額外數據，一條可以省略中括號，再多就不行了

    //$('input').click(function(e, data1, data2){
    //    alert( data1 + data2);
    //}).trigger('click', ['123', 'abc']);

    // Jedi: 這裡似乎有點問題
    //$('input').click(function(e, data1){
    //    alert(data1);
    //}).trigger('click', [['123', 'abc']]);  // 要穿數組，必須這樣！[[]]

    //$('input').click(function(e, data1, data2, data3){
    //    alert(data1 + "!" +data2 + "!" + data3);
    //}).trigger('click', ['123', 'abc', ['456','789']]);

    // Jedi: 來模擬傳遞一個對象
    //$('input').click(function(e, data1){
    //    alert(data1.age);
    //    alert(data1.name);
    //}).trigger('click', [{'age':37, 'name':'jedi'}]);

    // 用bind的綁定
    //$('input').bind('click', [123, 456], function(e, data1){
    //    console.log("e.data: " + e.data);
    //    console.log("data1.age: " + data1.age);
    //    console.log("data1.name: " + data1.name);
    //}).trigger('click', [{age:36, name:'jedi'}]);


    // todo, example 20-3 (自定義事件)
    // 似乎是很無聊的東西
    //$('input').bind('myEvent', function(e){
    //    alert('user custom method');
    //}).trigger('myEvent');

    // todo, example 20-4 (簡寫事件)
    //$('input').click(function(){
    //    alert('trigger shortest style');
    //}).click();

    // jQuery常用的trigger簡寫方法:
    //    blur, focusin, mousedown, resize
    //    change, focusout, mouseenter, scroll
    //    click, keydown, mouseleave, select
    //    dbclick, keypress, mousemove, submit
    //    error, keyup, mouseout, unload
    //    focus, load, mouseover

    // todo, example 20-5, 更高級一點的trigger
    //$('form').click(function(){
    //    alert('trigger shortest style');
    //}).triggerHandler('click');

    // 區別1, 觸發事件但不觸發默認行為
    // 頁面加載時自動提交，沒有阻止默認行為
    // $('form').trigger('submit');
    // $('form').triggerHandler('submit');

    //$('form').submit(function(e){
    //    e.preventDefault();
    //}).trigger('submit');

    // todo, example 20-6
    // 區別2
    // triggerHandler只影響匹配到的第一個元素。
    // trigger則影響匹配到的所有元素。

    //$('input').click(function(){
    //    alert('simulate action');
    //}).trigger('click');

    //$('input').click(function(){
    //    alert('simulate action');
    //}).triggerHandler('click');

    // todo, example 20-7
    // 區別3
    // trigger會返回當前激發事件的對象
    // triggerHanlder

    // 可以連綴
    //$('input').click(function(){
    //    alert('simulate user action');
    //}).trigger('click').css('color', 'red');

    // 沒有返回值，得到會是undefined
    //console.log($('input').click(function(){
    //    alert('simulate user action');
    //}).triggerHandler('click'));

    // 如果返回值，得到會是該值
    // 無法實現連綴（因為不是）
    //console.log($('input').click(function(){
    //    return 123;
    //}).triggerHandler('click'));

    // 區別4
    // 冒泡功能
    // todo, example 20-8

    //$('div').bind('myEvent', function(){
    //    alert('myEvent');
    //});
    //$('.d3').trigger('myEvent'); // 會冒泡

    //$('div').bind('myEvent', function(){
    //    alert('myEvent');
    //});
    //$('.d3').triggerHandler('myEvent'); // 不會冒泡


    //////////////////////////
    // 2. 命名空間

    // delete all event
    // $('input').bind('click', function(){ alert('abc'); });
    // $('input').bind('click', function(){ alert('xyz'); });
    // $('input').unbind();


    // only unbind click.abc
    //$('input').bind('click.abc', function(){ alert('abc'); });
    //$('input').bind('click.xyz', function(){ alert('xyz'); });
    //$('input').unbind('click.abc');

    // unbind .abc event
    //$('input').bind('click.abc', function(){ alert('abc'); });
    //$('input').bind('click.xyz', function(){ alert('xyz'); });
    //$('input').bind('mouseover.abc', function(){ alert('abc'); });
    //$('input').unbind('.abc');

    // todo, example 20-9

    // use trigger('.abc')
    //$('input').bind('click.abc', function(){ alert('abc'); });
    //$('input').bind('click.xyz', function(){ alert('xyz'); });
    //$('input').trigger('click.abc');

    // triggerHandle('.abc')
    //$('input').bind('click.abc', function(){ alert('abc'); });
    //$('input').bind('click.xyz', function(){ alert('xyz'); });
    //$('input').triggerHandler('click.abc');

    //////////////////////////
    // 3. 事件委託

    //////////////////////////
    // 4. on, off和one

});
