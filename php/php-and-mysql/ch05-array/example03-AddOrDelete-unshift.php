<?php

/**
 * Add element at head of array.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou
 */

$states = array("1" => "Oho", "2" => "New York");
array_unshift($states, "Altlas");

foreach ($states as $value => $value) {
    if ($value == NULL) {
        echo "Key:NULL, value:$value <br/>";
    } else {
        echo "Key:$value, value:$value <br/>";
    }
}
