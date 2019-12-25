<?php

/**
 * What is array?
 * @abstract
 * @author Jedi zhou
 * @copyright (c) 2014-3-31, Jedi Zhou
 */

$demo_fisrt_array = array(1, 2, 3, 4, 5);
$demo_second_array = range('a', 'h');
$demo_third_array = array('facther' => 'Jedi', 'mother' => 'Becky');
$demo = array($demo_fisrt_array, $demo_second_array, $demo_third_array);

foreach ($demo as $array) {
    foreach ($array as $element) {
        echo $element . " ";
    }
    echo "<br/>";
}
