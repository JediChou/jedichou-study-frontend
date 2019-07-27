// url, http://edu.51cto.com/lesson/id-14477.html

$(function(){
//////////////////////////
// 事件對象（下）
//////////////////////////

    //////////////////////////
    // 2. 冒泡和默認行為

    // example 19.1
    // 冒泡行為，和阻止冒泡

    //$('#btn').bind('click', function(e){
    //    e.stopPropagation();
    //    alert('btn');
    //});
    //
    //$('div').bind('click', function(e){
    //    e.stopPropagation();
    //    alert('div');
    //});
    //
    //$(document).bind('click', function(e){
    //    alert('document');
    //});

    // todo, example 19.2
    // 默認行為

    //$('a').click(function(e){
    //    e.preventDefault();
    //    alert('something');
    //});

    // 方法1
    // $('input').click(function(e){
    //     e.preventDefault();
    //     alert('submit form');
    // });

    // 方法2
    // $('form').submit(function(e){
    //     e.preventDefault();
    // });


    // todo, example 19.3
    // 想禁止默認行為，但要冒泡

    //$('#btn').bind('click', function(e){
    //    //e.preventDefault();
    //    //e.stopPropagation();
    //    alert('btn');
    //    return false;  // 自動執行前面兩句
    //});
    //
    //$('div').bind('click', function(e){
    //    alert('div');
    //    return false;
    //});
    //
    //$(document).bind('click', function(e){
    //    alert('document');
    //});

    // todo, example 19.4

    // jquery-方法
    //$('a').click(function(e){
    //    e.preventDefault();
    //    e.stopPropagation();
    //    alert(e.isDefaultPrevented());
    //    alert(e.isPropagationStopped());
    //});

    // 奇葩的寫法
    // $('a').click(function(e){ e.preventDefault();  e.stopPropagation(); });
    // $('a').click(function(e){ alert(e.isDefaultPrevented()); alert(e.isPropagationStopped()); });

    // todo, example 19.5
    // jquery-方法
    // 取消冒泡

    $('#btn').bind('click', function(e){
        e.stopImmediatePropagation();
        alert(e.isImmediatePropagationStopped());
        alert('btn');
    });

    $('#btn').bind('click', function(e){
        alert('btn other event');
    });

    $('div').bind('click', function(e){
        e.stopImmediatePropagation();
        e.isImmediatePropagationStopped();
        alert('div');
    });

    $(document).bind('click', function(e){
        alert('document');
    });


});
