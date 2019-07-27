<?php

/**
 * I call it simple merge. Function merge()!
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-2, Jedi Zhou 
 */

header("Content-type: text/html; charset = utf-8");

$Friend_BeiJing = array("Qiu Wei", "Xu Wei");
$Friend_ShenZhen = array("Ray", "Wang XiangChuan");
$All_Friend = array_merge($Friend_ShenZhen, $Friend_BeiJing);

print_r($All_Friend);
