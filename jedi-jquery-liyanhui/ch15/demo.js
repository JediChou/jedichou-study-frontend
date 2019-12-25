// url, http://edu.51cto.com/lesson/id-14472.html

$(function(){
//////////////////////////
// 表单选择器
//////////////////////////

    //////////////////////////
    // 1. 常规选择器 (use id, filter)

    // example 15.1

    // console.log($('input').size());
    // console.log($('input').eq(1).val());           // 语义不清晰
    // console.log($('input[type=password]').val());  // 略微清晰点
    // console.log($('input[name=user]').val());      // 更加清晰点
    // console.log($('input[name=password]').val());

    //////////////////////////
    // 2. 表单选择器

    // example 15.2

    //console.log($(':input').size());
    //console.log($(':input[name=city]').val());

    // todo, $(':text').size();  // 选择所有的单行文本框
    // todo, $(':password').size();  // 选择所有的密码框
    // todo, $(':radio').size();
    // todo, $(':radio[name=sex]').eq(1).val();
    // todo, $(':radio[name=sex]').first().val();

    // todo, $(':checkbox').size();
    // todo, $(':submit').size();
    // todo, $(':reset').size();
    // todo, $(':image').size();
    // todo, $(':button').size();
    // todo, $(':file').size();

    // todo, $(':hidden').size();
    // todo, $('form :hidden').size();

    //////////////////////////
    // 3. 表单过滤器
    // $(':enabled').size();
    // $(':disabled').size();
    // $(':checked').size();
    // $(':selected').size();

    // example 15.3
    // todo, $('form :enabled').size();


});
