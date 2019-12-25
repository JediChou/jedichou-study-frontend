<?php
$userAges = array("Abby"=>18, "Sammy"=>17, "Sarah"=>22);  // key-value
$array = array('Abby', "Sammy", "Sara", "Sarah", "Lin");  // only elements

// Show: 注意原始的转换
print_r(each($userAges));

// Show: 原始用法 key-value
// list($name, $age) = each($userAges);
// echo "name: " . $name . " age: " . $age;

// Show: 原始用法 only-elements
//list($var1, $var2) = $array;
//echo $var1 . " " . $var2;

// Show & Notice: list只能认识下标为数字的数组, 无法检索字符串下标
//list($var1, $var2) = $userAges;
//echo $var1 . " " . $var2 . "<br/>";
//print_r($userAges);

// Show: 在循环中使用, for风格
//for ($count = 0; $count < count($userAges); $count++) {
//    list($name, $age) = each($userAges);
//    echo "name: " . $name . " age: " . $age . "<br/>";
//}

// Show: 在循环中使用, while风格
//while (list($name, $age) = each($userAges))
//    echo "name: " . $name . " age: " . $age . "<br/>";

// Show