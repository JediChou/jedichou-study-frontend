<?php

/*
 * File name: use-array-rev.php
 * Description: 按单纯来反转字符串
 */

$s = "Once upon a time there was a turtle.";
$words = explode(" ", $s);
$words = array_reverse($words); // 數組的排列次序反轉，每個單詞並不反轉
$s = implode(" ", $words);

print $s;