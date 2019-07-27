<?php

//////////////////////////////////////////////////
// 第5章 - 数组6
//////////////////////////////////////////////////

// show: 在数组的开头插入到数组中
// Array_unShift_Demo();
function Array_unShift_Demo() {
    $arr = array('Team leader'=>'Jedi');
    print_r($arr);

    $current_count = array_unshift($arr, 'Ray');
    print_r($current_count . ' elements, ');
    print_r($arr);
}

// show: 在数组的结尾插入数组中
// Array_push_Demo();
function Array_push_Demo() {
    $arr = array('Team leader'=>'Jedi');
    print_r($arr);

    $current_count = array_push($arr, 'Ray');
    print_r($current_count . ' elements, ');
    print_r($arr);
}

// show: 删除数组的第一个元素
// Array_shift_Demo();
function Array_shift_Demo() {
    $temp = Array('First', 'Second', 'Third');
    print_r($temp);
    print_r("<br/>");

    array_shift($temp);
    print_r($temp);
}

// show: 随机获得两个不重复的数组下标
// Array_GetTwosElements_Demo();
function Array_GetTwosElements_Demo() {
    $temp = Array(
        'First'=>'Sarah',
        'Second'=>'Xin',
        'Third'=>'Sammy',
        'Fourth'=>'Loraine');
    $result = array_rand($temp, 2);

    print_r($result);
    echo "<br/>";

    print_r($result[0]);
    echo "<br/>";

    print_r($temp[$result[0]]);
}

// show: 演示Current和reset
// Array_CurrentReset_Demo();
function Array_CurrentReset_Demo() {
    $temp = Array(
        'First'=>'Sarah',
        'Second'=>'Xin',
        'Third'=>'Sammy'
    );

    echo current($temp);

    next($temp);
    echo "<br/>";
    echo current($temp);

    next($temp);
    echo "<br/>";
    echo current($temp);

    // no output, but hasn't output result.
    next($temp);
    echo "<br/>";
    echo current($temp);

    reset($temp);
    echo "<br/>";
    echo current($temp);
}

// show: 演示prev
// Array_Prev_Demo();
function Array_Prev_Demo() {
    $temp = Array(
        'First'=>'Sarah',
        'Second'=>'Xin',
        'Third'=>'Sammy'
    );

    echo current($temp);

    next($temp);
    echo "<br/>";
    echo current($temp);

    prev($temp);
    echo "<br/>";
    echo current($temp);
}

// show: 统计下标的个数
// Array_Count_Demo();
function Array_Count_Demo() {
    $temp = Array(
        'First'=>'Sarah',
        'Second'=>'Xin',
        'Third'=>'Sammy'
    );
    print_r(count($temp));
}

// show: 统计数组中值出现的次数
// Array_CountElement_Demo();
function Array_CountElement_Demo() {
    $temp = Array(1,2,3,4,5,5,5);
    print_r(array_count_values($temp));
}

// show: 将数组转换成比阿亮变量: extract()
Array_UseExtract_Demo();
function Array_UseExtract_Demo() {
    $temp = Array(
        'First'=>'Sarah',
        'Second'=>'Xin',
        'Third'=>'Sammy'
    );

    // 加上这个会好一点
    $First = $Second = $Third = null;

    // 最好还是不要用这种啦！太不安全咯～
    extract($temp);
    echo $First . "<br/>";
    echo $Second . "<br/>";
    echo $Third . "<br/>";
}