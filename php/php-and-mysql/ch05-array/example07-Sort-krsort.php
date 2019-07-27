<?php

/**
 * Sort array by key, but this is reverse sort.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

$array = array(
    0 => "Jedi",
    1 => "Becky",
    2 => "Kiwi"
);

krsort($array);
print_r($array);