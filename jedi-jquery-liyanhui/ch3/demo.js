
// 仅执行最后一句
//window.onload = function () { alert(1); }
//window.onload = function () { alert(2); }

// 这个会全部加载
//$(function(){ alert(1); });
//$(function(){ alert(2); });

// 3. jquery object exchange with DOM object
//$(function(){
    // alert(document.getElementsById('box')); // return DOM object
    // alert($('#box').get(0));
    // alert($(document.getElementById('box')).css('color', 'red'));  notice this line.
//});

// 4. 库的冲突

//  like ui
//  like game engine

// method1
//  1. base lib, jquery
//  2. 将jquery放在base.js后面加载
//<script type="text/javascript" src="./base"></script>
//<script type="text/javascript" src="./jquery.js></script>
//var $$ = jQuery;
//$(function(){
//    alert($('#box').ge(0));         // $是base.js来接管
//    alert($$('#box').get(0));   // 用jQuery来使用jQuery
//});

// method2
//  1. base lib, jquery
//  2. 将jquery放在base.js前面加载
//<script type="text/javascript" src="./jquery.js></script>
//<script type="text/javascript" src="./base"></script>
//jQuery.noConflict();
//var $$ = jQuery;
//$(function(){
//    alert($('#box').ge(0));         // $是base.js来接管
//    alert($$('#box').get(0));   // 用jQuery来使用jQuery
//});