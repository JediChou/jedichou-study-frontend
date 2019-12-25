<?php

/**
 * Check object is array. If object is array, function will be return true, else
 * return false.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou
 */

$container[] = 1;
$container[] = 'a';
$container[] = 'A';
$container[] = range(2, 3);
$container[] = range('a', 'z');
$container[] = array(3, 2, 1);
$container[] = array(1=>"Jedi", 2=>"Becky");

foreach ($container as $element) {
    if (is_array($element))
        echo "This is a array.<br/>";
    else
        echo "This is not array.<br/>";
}
