// url: http://edu.51cto.com/index.php?do=lesson&id=14465
// 选择器引擎（继承了CSS语法）
// Basic: xhtml+css

$(function(){
//////////////////////////
// 过滤器-第一讲
//////////////////////////

    ///////////////////////////////////////
    // 4. 子元素过滤器

    // example 9.1
    //$('li:first-child').css('color', 'red');
    //$('li:last-child').css('color', 'red');

    // example 9.2
    //$('li:only-child').css('color', 'red');

    // example 9.3
    // notice: 索引从1开始
    //$('li:nth-child(even)').css('color', 'red');
    //$('li:nth-child(odd)').css('color', 'red');
    //$('li:nth-child(1)').css('color', 'red');
    // notice: 可以输入一个公式
    //$('li:nth-child(2n)').css('color', 'red');

    ///////////////////////////////////////
    // 5. 其他方法

    // example 9.4
    // console.log($('.special').is('li'));
    // console.log($('.special').is('div'));
    // console.log($('.special').is($('li')));
    // console.log($('.special').is($('li').get(2)));
    // console.log($('.special').is($('li').eq(2)));
    // console.log($('.special').is(function(){
    //     // 这里的$this相当于.special
    //     // 而且必须用到$this
    //     return $(this).attr('title') == 'element3';
    // }));

    // example 9.5
    // console.log($('li').eq(2).hasClass('special'));
    // console.log($('li').eq(3).hasClass('special'));

    // example 9.6
    // 两个都是索引值
    // $('li').slice(0, 3).css('color', 'red');
    // $('li').slice(2).css('color', 'red');
    // $('li').slice(0, -2).css('color', 'red');

    // example 9.7
    // $('#embedded').find('li').get(0);
    // console.log($('#embedded').find('li').end().get(0));  // 找到父节点
    // $('#embedded').next('ul').end().css('color', 'red');

    // example 9.8
    // console.log($('#introduce').contents());

    // example 9.9
    // 灵活性很高，值得推荐
    // $('li').filter('.special, :first, :last').css('color', 'red');

    // 更高级的选择
    // $('li').filter(function(){
    //     return $(this).attr('class') == 'special' && $(this).attr('title') == 'element3';
    // }).css('color', 'red');

});
