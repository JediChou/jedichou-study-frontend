<?php

/**
 * Use range method to create some array objects.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou
 */

/* define array objects */
$numbers = range(1, 20);
$lowcase_chars = range('a', 'z');
$upcase_chars = range('A', 'Z');
$array = array($numbers, $lowcase_chars, $upcase_chars);

/* display elements */
foreach ($array as $elt_array) {
    foreach ($elt_array as $elt)
        echo $elt . " ";
    echo "<br/>";
}
