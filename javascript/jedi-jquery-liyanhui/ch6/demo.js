// url: http://edu.51cto.com/lesson/id-14462.html
// 选择器引擎（继承了CSS语法）
// Basic: xhtml+css

$(function(){
//////////////////////////
// 3. 高级选择器
//////////////////////////

    // Notice: IE7+ 才支持高级选择器

    /////////////////////////////
    // 层次选择器

    // Example 6.1
    //$('#box p').css('color', 'red');
    //$('#box').find('p').css('color', 'red');
    // notice: find()等价于上面的过滤器

    /////////////////////////////
    // 子选择器

    // Example 6.2, IE7+支持
    //$('div > p').css('color', 'red');
    //$('div').children('p').css('color', 'green');
    // notice: children()等价于上面的过滤器

    // Example 6.3, next选择器 IE7+支持
    // 必须是同一层节点才能被选择到，子节点上是不行的
    //$('div + span').css('color', 'blue');
    //$('div').next('span').css('color', 'blue');

    // Example 6.4, nextAll选择器 IE7+支持
    // 必须是同一层节点才能被选择到，子节点上是不行的
    //$('div ~ span').css('color', 'blue');
    //$('div').nextAll('span').css('color', 'blue');

    // Example 6.5  next中的标签为空
    // $('div').next('').css('color', 'blue');
    // $('div').next().css('color', 'blue');
    // $('div').next('*').css('color', 'blue');

    // Example 6.6  prev
    //$('div').prev('p').css('color', 'red');

    // Example 6.7  prevAll
    //$('div').prevAll('p').css('color', 'red');

    // Example 6.8 prev and next
    //$('div').prevAll().css('color', 'red');
    //$('div').nextAll().css('color', 'red');
    // can use this style
    //$('div').prevAll().nextAll().css('color', 'red');
    // you can use this method
    //$('div').siblings().css('color', 'red');

    // Example 6.9 prevUntil(), nextUntil()
    //$('div').prevUntil('p').css('color', 'red');
    //$('div').nextUntil('p').css('color', 'red');

});
