<?php

/**
 * Iterate keys for array.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com> 
 * @copyright (c) 2014-4-1, Jedi Zhou
 */

header("Content-type: text/html; charset=utf-8");

$Leaders["第一届"] = "蒋祖力";
$Leaders["第二届"] = "强振雄";
$Leaders["第三届"] = "刘承浩";
$Leaders["第四届"] = "张宝军";

while($value = current($Leaders)) {
    printf("%s<br/>", $value);
    next($Leaders);  /* 没有foreach好用 */
}
