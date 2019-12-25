<?php

/**
 * Return fibs numbers. This function use recursive to calculate.
 * @abstract
 * 
 * @author Jedi Zhou
 * @copyright (c) 2014, Jedi Zhou
 */
function fibs($number) {
    if ($number == 0) {
        return 0;
    } elseif ($number == 1) {
        return 1;
    } else {
        return fibs($number - 1) + fibs($number - 2);
    }
}

$array = range(0, 10);
foreach ($array as $elt) {
    echo "If you input $elt, will be get: " . fibs($elt) . "<br/>";
}