<?php

// File name: look-and-say.php
// Author: J.H.Conway
// Student: Jedi Chou
// Create time: 2014-3-16 10:08

function LookAndSay($s) {
    // 将保存返回值的变量初始化为空字符串
    $r = '';
    // $m 用于保存我们要查找的字符,
    // 同时将其初始化为字符串中的第一个字符
    $m = $s[0];
    // $n 用于保存我们找到的$m的数目,将其初始化为1
    $n = 1;
    for($i=1, $j=strlen($s); $i<$j; $i++) {
        // 如果这个字符与上一个字符相同
        if($s[$i] == $m) {
            // 这个字符的数目加1
            $n++;
        } else {
            // 否则, 把数目和这个字符追加到返回值
            $r .= $n.$m;
            // 把要找的字符设置为当前的字符
            $m = $s[$i];
            // 并把数目重置为1
            $n = 1;
        }
    }
    
    // 返回构建好的字符串以及最终的数目和字符
    return $r.$n.$m;
}

for($i=0, $s=1; $i<10; $i++) {
    $s = LookAndSay($s);
    print "$s <br/>\n";
}
