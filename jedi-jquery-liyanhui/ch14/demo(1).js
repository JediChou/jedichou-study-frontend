// url, http://edu.51cto.com/lesson/id-14471.html

$(function(){
//////////////////////////
// DOM节点操作
//////////////////////////

    //////////////////////////
    // 3. 包裹节点

    // warp(html)
    // warp(element)
    // warp(function(index){})
    // unwarp(html)
    // unwarp(element)
    // unwarp(function(index){})
    // warpAll(html)

    // example 14.1
    // todo, $('div').warp('<strong></strong>');
    // todo, $('div').warp('<strong />');
    // todo, $('div').warp('<strong>123</strong>');
    // todo, $('div').warp('<strong><em></em></strong>');

    // example 14.2
    // todo, $('div').warp($('strong').get(0));
    // todo, $('div').warp(document.createElement('strong'));

    // todo, $('div').warp(function(index, html){return '<strong />';});

    // example 14.3
    // todo $('div').warp('<strong><em></em></strong>'); $('div').unwrap();  // unwrap不带参数

    // example 14.4
    // todo,  $('div').warpAll('<strong />');
    // todo,  $('div').warpAll(document.createElement('strong'));

    // example 14.5
    // todo, $('div').warpInner('<strong />');
    // todo, $('div').warpInner(document.createElement('strong'));
    // todo, $('div').warpInner(function(index){});



    //////////////////////////
    // 4. 节点操作

    // example 14.6
    // todo, $('div').click(function(){ alert('ycku.com');});
    // $('div').clone().appendTo('body');
    // $('div').clone(true).appendTo('body');  // 将event也复制下来

    // example 14.7
    // todo, $('div').remove();
    // todo, $('div').remove('.box');  // 起到一个过滤作用
    // alert($('div').get(0));
    // todo, $('div').remove().appendTo('body');  // remove实际有个返回值，但它没有event

    // example 14.8
    // todo, $('div').deptach();  // 与remove不同，它带有event
    // todo, $('div').detach().appendTo('body');

    // example 14.9
    // todo, $('div').empty();

    // example 14.10
    // todo, $('div').replaceWith('<span>DOM</span>');  // 替换是没有事件的

    // example 14.11
    // todo, $('div').rplaceAll('<span>DOM</span>');

});
