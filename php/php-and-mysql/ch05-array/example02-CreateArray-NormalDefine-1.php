<?php

/**
 * Use normal method to define an array.
 * @abstract
 * 
 * @author Jedi Zhou
 * @copyright (c) 2014-3-31, Jedi Zhou
 */
$students[0] = "Wu ZhuoQuan";
$students[1] = "Guo MeiHe";
$students[2] = "Wu GuiFang";
$students[3] = "Li BingXian";

foreach ($students as $$number) {
    echo $$number . "<br/>";
}
