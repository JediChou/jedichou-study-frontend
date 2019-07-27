<?php

/**
 * Pass parameters to array.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou
 */

// Reference URL: http://www.w3school.com.cn/php/func_array_walk.asp

header("Content-type: text/html; charset = utf-8");

function walkArrayObject($value, $key) {
    echo "The key is $key, and the value is $value.<br/>";
}

$Leaders  = array(1=>"毛泽东", 2=>"邓小平", 3=>"江泽民", 4=>"胡锦涛");
array_walk($Leaders, "walkArrayObject");
