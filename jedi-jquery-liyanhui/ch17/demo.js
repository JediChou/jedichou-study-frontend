// url, http://edu.51cto.com/lesson/id-14474.html

$(function(){
//////////////////////////
// 基础事件
//////////////////////////


    //////////////////////////
    // 2. 简写事件（续）

    // todo, example 17.1

    // 移入时触发
    // $('input').mouseover(function(){
    //     $(this).css('background', 'red');
    // });

    // 移出时触发
    // $('input').mouseout(function(){
    //     $(this).css('background', 'green');
    // });

    // 移入、移出事件可以使用链式法则
    // $('input').mouseover(function(){
    //    $(this).css('background', 'red');
    // }).mouseover(function(){
    //     $(this).css('background', 'green');
    // });

    // 穿入元素时触发, 穿出元素时触发
    // $('input').mouseenter(function(){
    //     $(this).css('background', 'red');
    // }).mouseleave(function(){
    //    $(this).css('background', 'green');
    // });

    // todo, example 17.2 difference (use div and p tag)

    // mouseover  会触发子节点
    // mouseenter 不触发子节点
    // $('div').mouseover(function(){
    //    $('strong').html(function(index, value){
    //       return value + '1';
    //    });
    // });

    // todo, example 17.3

    // $('input').keydown(function(e){
    //    console.log('1');
    //    console.log(e.keyCode);
    // });

    // $('input').keyup(function(){
    //     console.log('1');
    // });

    // $('input').keypress(function(e){
    //    console.log(e.charCode);
    // });


    // todo, example 17.4

    // 必须是当前元素才能激活 <div><input/></div>，就不行
    // $('input').focus(function(){ alert('get focus'); });
    // $('input').blur(function(){ alert('lost focus'); });

    // 可以不是当前元素 <div><input/></div>，可以用div事件激活
    // $('input').focusin(function(){ alert('get focus'); });
    // $('input').focusout(function(){ alert('lost focus'); });


    //////////////////////////
    // 3. 复合事件
    // ready(fn)
    // hover([fn1,] fn[2])
    // toggle(fn1, fun2[, fn3..])

    // todo, example 17.5
    // hover类似鼠标移入、移出的结合体
    //   具体来讲是mouseenter, mouseleave的结合体

    // 背景移入移除的切换效果
    // $('div').hover(function(){
    //     $(this).css('background', 'black');
    // }, function(){
    //    $(this).css('background', 'red');
    // });

    // todo, example 17.6
    // toggle在新版本中已被删除
    // 但是toggle可实现部分动画效果

    // $('div').toggle('slow');

    // 可以使用一个向下兼容的jQuery插件来使用原来的插件.
    // function Red() {};
    // function Blue() {};
    // function Green() {};
    // $('div').toggle(Red, Blue, Green);

    // 也可以自己做toggle，而不需使用插件
    // var flag = 1;
    // $('div').toggle(function(){
    //    if (flag==1) {flag = 2; Red()}
    //    if (flag==2) {flag = 3; Blue()}
    //    if (flag==3) {flag = 1; Green()}
    // });
});
