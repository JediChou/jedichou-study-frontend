// url, http://edu.51cto.com/lesson/id-14473.html

$(function(){
//////////////////////////
// 基础事件
//////////////////////////

    //////////////////////////
    // 1. 绑定事件

    // [normal event]:
    // click, dbclick
    // mousedown, mouseup, mousemove
    // change, select, submit
    // keydown, keypress, keyup
    // blur, focus, load, resize, scroll error

    // use bind() to bind event
    // bind(type, [data], fn)

    // todo, example 16.1
    //$('button').bind('click', function(){
    //    alert('click me');
    //});

    // todo, example 16.2 - user normal function to bind
    //$('button').bind('click', fn);
    //function fn() {
    //    alert('click me');
    //}

    // todo, example of 16.3 - bind multi-event event
    //$('button').bind('click mouseover', function(){
    //    alert('click me');
    //});

    // todo, example 16.3.1
    // a simple counter
    //$('button').bind('mouseover mouseout', function{
    //    $('result').html(function(index, value){
    //        return value + '1';
    //    });
    //});

    // todo, example of 16.4 - use key value pattern to bind event
    //$('button').bind({
    //    click    : function(){ alert('click me'); },
    //    mouseover: function(){ alert('mouseover me'); },
    //    mouseout : function(){ alert('mouseout me'); }
    //});

    // todo, example of 16.5 - use unbind()
    // $('button').unbind();                // unbind all event
    // $('button').unbind('click');         // unbind click method
    // $('button').unbind('click', fn2);    // unbind javascript func.


    //////////////////////////
    // 2. 简写事件

    // click(fn);
    // dbclick(fn);
    // mousedown(fn); mouseup(fn); mousemove(fn); mouseout(fn); mouseenter(fn);
    // mouseleave(fn);

    // example 16.6
    // $('input').click(function(){ console.log('abc'); });
    // $('input').dblclick(function(){ console.log('abc'); });
    // $('input').mousedown(function(){ console.log('abc'); });
    // $('input').mouseup(function(){ console.log('abc'); });


    // todo, example 16.7
    // $('window').unload(function(){ alert('abc'); });
    // $('window').resize(function(){ console.log('resize'); });
    // $('window').scroll(function(){ console.log('scroll bar is active'); });

    // todo, example 16.8
    // $('input').select(function(){});
    // $('input').change(function(){});

    // todo, example 16.9
    // $('#formid').submit(function(){});
    // $('form').submit(function(){});

    //////////////////////////
    // 3. 复合事件
});
