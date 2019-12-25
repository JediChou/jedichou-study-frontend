// url: http://edu.51cto.com/lesson/id-14466.html

$(function(){
//////////////////////////
// 基础DOM和CSS操作
//////////////////////////

    ///////////////////////////////////////
    // 1. DOM简介

    // DOM是文档对象模型（庞大繁杂）
    // D-Document, O-Object, M-Model
    // Standard DOM, HTML DOM, CSS DOM
    // Tree Structure


    ///////////////////////////////////////
    // 2. 设置元素及内容

    // 精确的选定元素节点
    // html(), text(), val()

    // example 10.1 - html()
    //console.log($('#box').html());
    //$('#box').html('<em>www.baidu.com</em>');

    // example 10.2 - text()
    // text()会清除HTML标签
    //console.log($('#box').text());
    //$('#box').text('www.baidu.com');  // 同时标签会自动转义

    // example 10.3 - val()
    // 获取或设置表单中的内容
    // console.log($('#box').val());
    // console.log($('#text1').val());
    // $('#text1').val('Jedi Chou');
    //
    // 设置radio
    // console.log($('#sex').val());
    // $('#sex').val('female');

    // example 10.4 - 设置首选项
    // $('input').val(['male', 'female', 'domain']);


    ///////////////////////////////////////
    // 3. 元素属性操作

    // example 10.5
    // console.log($('#box').attr('id'));
    // $('#box').attr('id', 'NotBox');
    // $('#box').attr('title', 'BoxTitle');  // 可用此来增加属性
    // $('#box').attr({'title':'BoxTitle', 'status':'done'});  // 设置多个属性值

    // $('#box').attr('title', function(index, value){
    //     return "原来的标题是:" + value + ", 现在的标题是:我是程序员" + (index+1);
    // });

    // 使用html()进行追加，对上述的一种扩展
    // $('#box').html( $('#box').html() + "&nbsp<em>www.baidu.com</em>");

    // 使用传value的方式来改写上面的内容
    // $('#box').html(function(index, value){
    //     return value + "&nbsp<em>www.baidu.com</em>";
    // });

    // example 10.6
    // 这里不支持removeAttr(function(){});
    // $('#box').removeAttr('title');

    ///////////////////////////////////////
    // Notice: 不建议动态创建ID
    ///////////////////////////////////////

    // 4. 元素样式操作

});
