<?php

// Example 1-15: 用substr_replace()替换子字符串
//   把从位置$start开始到$old_string结尾处的所有字符串
//   替换成$new_substring
// $new_string = substr_replace($old_string, $new_substring, $start);
//
//   把从$start位置开始的$length个字符串替换成$new_substring
// $new_string = substr_replace($old_string, $new_substring, $start, $length);

println(substr_replace("My pet is a blue dog.", "fish.", 12));
println(substr_replace("My pet is a blue dog.", "green", 12, 4));

$cread_card = "1111 1111 1111 1111";
println(substr_replace($cread_card, "xxxx ", 0, strlen($cread_card)-4));

function println($str) {
    print $str . "\n";
}
