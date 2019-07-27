<?php

/**
 * 将数组进行拆分多维数组。 
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-3, Jedi Zhou
 */
header("Content-type: text/html; charset=utf-8");

$Cards_ID = range(1, 52);   // 相当于准备一副牌
shuffle($Cards_ID);         // 洗牌
$Hands = array_chunk($Cards_ID, 13); // 将牌发到4个人的手上

foreach($Hands as $ids => $ones) {
    echo $ids . " ";
    print_r($ones);
    echo "<br/>";
}
