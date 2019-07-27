// url: edu.51cto.com/lesson/id-14469.html

$(function(){
//////////////////////////
// DOM节点操作
//////////////////////////

    //////////////////////////
    // 1. 创建节点

    // example 13.1 动态创建一段HTML内容
    //var box = $('<div id="box">Node</div>'); // create node
    //$('body').append(box);

    /////////////////////////////////////
    // 内部插入:
    // append()
    // append(function(index, ){})
    // appendTo()
    // prepend(content);
    // prepend(function(index, html){})
    // prependTo(content)
    /////////////////////////////////////

    // example 13.2

    // $('div').append('<strong>DOM node</strong>');

    //$('div').append(function(){
    //    return '<strong>DOM node</strong>';
    //});

    // index 是div的索引值
    //$('div').append(function(index){
    //    return ' ' + index + ' ' + '<strong>DOM node</strong>';
    //});

    // value是原本的内容
    //$('div').append(function(index, value){
    //    $('div').html('');
    //    return value + ' ' + index + ' ' + '<strong>DOM node</strong>';
    //});

    // example 13.3
    //$('strong').appendTo($('div'));

    // example 13.4
    //$('#box').prepend('<strong>strong</strong>');

    // example 13.5

    //$('div').prepend(function(){
    //    return '<strong>DOM node</strong>';
    //});

    //$('div').prepend(function(index){
    //    return ' ' + index + ' -> ' + '<strong>DOM node</strong>';
    //});

    //$('div').prepend(function(index, content){
    //    $('div').html('');
    //    return content + ': ' + index + ' -> ' + '<strong>DOM node</strong>';
    //});

    // example 13.6
    //$('strong').prependTo($('div'));

    //////////////////////////
    // 2. 插入节点


    /////////////////////////////////////
    // 外部插入:
    // after(content)
    // after(function(index, html){})
    // before(content)
    // before(function(index, html){})
    // insertAfter(content)
    // insertBefore(content)
    /////////////////////////////////////

    // example 13.7
    //$('div').after('<strong>add this strong</strong>');

    // example 13.8

    //$('div').after(function(){
    //    return '<strong>add this strong</strong>';
    //});

    //$('div').after(function(index){
    //    return ' ' + index + '->' + '<strong>add this strong</strong>';
    //});

    //$('div').after(function(index, content){
    //    $('div').html('');
    //    return content + ' ' + index + '->' + '<strong>add this strong</strong>';
    //});

    // example 13.9
    //$('div').before('<strong>add this strong</strong>');

    // example 13.10

    //$('div').before(function(){
    //    return '<strong>add this strong</strong>';
    //});

    //$('div').before(function(index){
    //    return '<div> ' + index + '->' + '<strong>add this strong</strong></div>';
    //});

    //$('div').before(function(index, html){
    //    return '<div> ' + html + '<br>' + index + '->' + '<strong>add this strong</strong></div>';
    //});

    // example 13.11
    $('#box').insertAfter($('#pox'));

    // TODO example 13.12
    // insertBefore();


    //////////////////////////
    // 3. 包裹节点

    //////////////////////////
    // 4. 节点操作

});
