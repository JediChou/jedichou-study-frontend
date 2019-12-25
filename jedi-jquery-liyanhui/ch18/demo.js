// url, http://edu.51cto.com/lesson/id-14476.html

$(function(){
//////////////////////////
// 事件對象（上）
//////////////////////////

    //////////////////////////
    // 事件對象
    // 1. 有兼容性問題
    // 2. jquery無需擔心兼容性問題

    // List:
    // type, target, data,
    // relatedTarget, currentTarget,
    // pageX, pageY
    // screenX, screenY
    // result
    // timeStamp
    // which
    // altKey, shiftKey, ctrlKey, metaKey

    // todo, example 18.1
    $('#box').click(function(e){
        // alert(e);
        // alert(e.type);
        // alert(typeof e);
        // alert(e.target);
    });

    // todo, example 18.2
    $('#box').click(function(e){
        // alert(e.relatedTarget);
        alert(e.currentTarget);
    });

    // todo, example 18.3
    // target是獲取觸發元素的DOM，觸發元素，就是你點了哪個就是哪個
    // 可以解決元素重疊的情況, <div><span></span></div>
    // 以上若<div>有觸發事件，則點擊<span>區域，也會觸發<div>的事件！
    // 但事件的主體選擇的是<span>，而不是<div>，即target=<span>

    // currentTarget得到的監聽元素的DOM，你綁定的哪個就是哪個
    // 可以解決元素重疊的情況, <div><span></span></div>
    // 以上若<div>有觸發事件，則點擊<span>區域，也會觸發<div>的事件！
    // 但事件的主體選擇的是<div>，而不是<span>, currentTarget=<div>

    // todo, example 18.4
    // 獲得鄰近的的節點
    // $('span').bind('mouseover', function(e){
    //     alert(e.relatedTarget());  // will get div
    // });

    // todo, example 18.5
    // Jedi: 這個要好好體會下
    // $('div').bind('click', function(e){
    //     alert(this == e.currentTarget)
    // });
    //
    // $('div').bind('click', function(e){
    //     alert(this == e.target)
    // });

    // todo, example 18.6
    // 獲取額外的數據- number, string, array, object
    // $('div').bind('click', 123, function(e){ alert(e.data); });
    // $('div').bind('click', 'jedi love coding', function(e){ alert(e.data); });
    // $('div').bind('click', ['a', 'b', 'c'], function(e){ alert(e.data); });
    // $('div').bind('click', {'color':'red', 'name':'harry'}, function(e){ alert(e.data.name); });


    // todo, example 18.7

    // pageX, pageY，頁面的原點-即頁面的最左上的那個點
    // screenX, screenY, 即瀏覽器的最左上的那個點
    //$('div').click(function(e){
    //    console.log(e.pageX);
    //    console.log(e.screenX);
    //    console.log(e.clientX);
    //});
    //
    //$('div').click(function(e){
    //    console.log(e.pageY);
    //    console.log(e.screenY);
    //    console.log(e.clientY);
    //});

    // todo, example 18.9

    // 這個有點不是很懂
    //$('div').bind('click', function(e){
    //    alert(e.result);
    //});

    // 獲得時間戳（據說比較好操作）
    // $('div').bind('click', function(e){
    //     alert(e.timeStamp);
    // });

    // 判斷鼠標的左中右鍵
    // $('div').bind('mousedown', function(e){
    //     alert(e.which);
    // });

    //

    // 判斷按鍵
    //$('#pox').bind('keyup', function(e){
    //    alert(e.which);
    //});

    // example 18.10
    //$('#pox').bind('click', function(e){
    //    alert(e.altKey);
    //    alert(e.ctrlKey);
    //    // ... 還有其他
    //});

    //////////////////////////
    // 冒泡和默認行為


});
