// url: http://edu.51cto.com/lesson/id-14468.html

$(function(){
//////////////////////////
// 基础DOM和CSS操作
//////////////////////////

    ///////////////////////////////////////
    // 4. 元素样式操作

    // example 11.1
    // console.log($('#box').css('color'));
    // $('#box').css('color', 'gray')

    // example 11.2
    // example 11.3
    // example 11.4
    //var a = $('#box').css(['color', 'height', 'width']);

    // console.log(a);
    // console.log('color:' + a.color);
    // console.log(a.height);
    // console.log(a.width);

    // 使用以下方式来遍历
    // for(var property in a) {
    //     console.log(property + ':' + a[property]);
    // }

    // example 11.3
    // use $.each()

    // 第一种方式
    // $.each(a, function(property){
    //     console.log(property + ':' + a[property]);
    // });

    // 第二种方式
    // $.each(a, function(property, value){
    //     console.log(property + ':' + value);
    // });

    // 直接应用一下(遍历DOM的所有属性)
    // $('div').each(function(index, element){
    //     console.log(index + ':' + element);
    //     $.each(element, function(property, value){
    //         console.log("    " + property + ":" + value);
    //     });
    // });

    // example 11.4 - 设置多个CSS样式
    // 比较笨蛋的方式
    // $('div').css('color', 'red').css('background-color', 'blue');
    // $('div').css({'color':'red', 'background-color':'blue'});

    // example 11.5 - 计算长度，或涉及某些运算

    // $('div').css('width', function(){
    //     return 345;  // 可直接回传
    // });

    //$('div').css('width', function(index, value){
    //    // index, 当前索引
    //    // value, 当前值
    //    // return parseInt(value) - 50 + 'px';
    //    // notice: 非常有价值，尽量这么做！(Jedi, 要仔细考察下)
    //    return parseInt(value) - 50;  // 'px'可以不用写，默认就是像素
    //});

    // example 11.6
    // 添加class
    // $('div').addClass('red');
    // $('div').addClass('red bg size');

    // 也可以删除class
    // $('div').addClass('red bg size');
    // $('div').removeClass('red');
    // $('div').removeClass('bg size');

    // example 11.7 - toggleClass()
    // 类别样式的切换（默认样式和指定样式）

    // 第一种方式
    // $('div').click(function(){
    //     $(this).toggleClass('red size');
    // });

    // 第二种方式
    // var count = 0;
    // $('div').click(function(){
    //      $(this).toggleClass('red size', count++ % 2 == 0);
    // });

    // 第三种方式
    // $('div').click(function(){
    //     if($(this).hasClass('green')) {
    //         $(this).removeClass('green');
    //         $(this).addClass('red size');
    //     } else {
    //         $(this).removeClass('red size');
    //         $(this).addClass('green');
    //     }
    // });

    // 第四种方式
    // 这里有个小缺陷
    //$('div').click(function(){
    //    $(this).toggleClass(function(){
    //        return $(this).hasClass('green') ? 'red' : 'green';
    //    });
    //});

    // 第四种方式（改进型）
    //$('div').click(function(){
    //    $(this).toggleClass(function(){
    //         if($(this).hasClass('green')) {
    //             $(this).removeClass('green');
    //            return 'red size';
    //         } else {
    //             $(this).removeClass('red size');
    //             return 'green';
    //         }
    //    });
    //});

    // example 11.7

    // 第一种方式：要获得index，必须使用document
    //$(document).click(function(){
    //    $('div').toggleClass(function(index, className, switchBool){
    //
    //        console.log(
    //            "index : "        + index +
    //            ", className : "  + className +
    //            ", switchBool : " + switchBool
    //        );
    //
    //         if($(this).hasClass('green')) {
    //             $(this).removeClass('green');
    //            return 'red size';
    //         } else {
    //             $(this).removeClass('red size');
    //             return 'green';
    //         }
    //    });
    //});

    // 第二种方式：引入count，可以获得(switchBool)
    var count = 0;
    $(document).click(function(){
        $('div').toggleClass(function(index, className, switchBool){

            console.log(
                "index : "        + index +
                ", className : "  + className +
                ", switchBool : " + switchBool
            );

             if($(this).hasClass('green')) {
                 $(this).removeClass('green');
                return 'red size';
             } else {
                 $(this).removeClass('red size');
                 return 'green';
             }
        }, count++ % 2 == 0);
    });

});
