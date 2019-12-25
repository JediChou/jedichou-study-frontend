// url: edu.51cto.com/lesson/id-14469.html

$(function(){
//////////////////////////
// 基础DOM和CSS操作
//////////////////////////


    /////////////////////////////////
    // 5. CSS方法

    // example 12.1
    // console.log($('#box').css('width'));  // 获取
    // $('#box').css('width', 300);          // 设置：使用CSS样式设定
    // $('#box').width(500);                 // 设置：直接使用jQuery的内置函数

    // 可用作width的计算
    //$('#box').width(function(index, value){
    //    return value + 123;
    //});

    // example 12.2
    // console.log($('#box').css('height'));  // 获取
    // $('#box').css('height', 50);           // 设置：使用CSS样式设定
    // $('#box').height(50);                  // 设置：直接使用jQuery的内置函数

    // 可用作width的计算
    //$('#box').height(function(index, value){
    //    return value + 50;
    //});

    // example 12.3
    // width, 不包含
    // innerWidth, 获取元素宽度，包含内边距padding
    // outerWidth, 获取元素宽度，包含边框和内边距padding

    // 共4种情况，其值会根据实际情况有所改变
    //console.log('width : ' + $('div').width());
    //console.log('innerWidth : ' + $('div').innerWidth());
    //console.log('outerWidth : ' + $('div').outerWidth());
    //console.log('outerWidth(true) : ' + $('div').outerWidth(true));

    // example 12.4

    // offset() 获得元素相对于视口的平移位置

    //console.log($('div').offset());
    //console.log($('div').offset().left);
    //console.log($('div').offset().top);

    //console.log($('strong').offset().top);
    //console.log($('strong').offset().left);

    // example 12.5
    //console.log($('div').position());
    //console.log($('div').position().top);
    //console.log($('div').position().left);

    // 以下的属性或方法，自己去研究
    // todo, scrollTop()
    // todo, scrollTop(value)  // Li Yan Hui, 用的比较多
    // todo, scrollLeft()
    // todo, scrollLeft(value)

});
