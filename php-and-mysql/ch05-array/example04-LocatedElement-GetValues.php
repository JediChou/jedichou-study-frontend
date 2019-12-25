<?php

/**
 * Use inside function to get values of array.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou
 */

header("Content-type: text/html; charset=utf-8");

$Leaders["第一届"] = "蒋祖力";
$Leaders["第二届"] = "强振雄";
$Leaders["第三届"] = "刘承浩";
$Leaders["第四届"] = "张宝军";

$Software_Factory_Leaders_Name = array_values($Leaders);
print_r($Software_Factory_Leaders_Name);
