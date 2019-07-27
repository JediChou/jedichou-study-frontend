<?php

/**
 * Use normal method to sort array.
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

$Some_Elements_Container = array(
    "Numbers" => range(10, 1),
    "LowCase" => range('h', 'a'),
    "UpCase" => range('H', 'A')
);

foreach($Some_Elements_Container as $array) {
    sort($array);
    print_r($array);
    printf("<br/>");
}
