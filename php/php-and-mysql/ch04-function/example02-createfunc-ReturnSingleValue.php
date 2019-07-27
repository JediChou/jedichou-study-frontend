<?php

/**
 * Return an array element sizes.
 * @abstract
 * 
 * @author Jedi Zhou
 * @copyright (c) 2014, Jedi Zhou
 */
function getArrayLengths($array) {
    $sizes = 0;
    foreach($array as $elt) {
        $sizes++;
    }
    return $sizes;
}

/* Create an array, and use getArrayLengths to calcualte array's size */
$array_test = array("Jedi", "Becky");
echo "The array size is: " . getArrayLengths($array_test) . "<br/>";
