<?php

/*
 * File name: Ch030802-Associativity.php
 * Modify by Jedi Chou at 2013.4.24 15:05 PM.
 * Description:
 *   Demo for associativity.
 *   Feature: 操作符结合性
 */

// Sample 1
$value1 = 3 * 4 * 5 * 7 * 2;
$value2 = ((((3 * 4) * 5) * 7) * 2);
if ($value1 == $value2) {
    printf("\$value1 equal \$value2. <br/>");
}

// Sample 2
$c = 5;
$value3 = $a = $b = $c;
$value4 = ($a = ($b = $c));
printf("%d-%d-%d-%d. <br/>", $value3, $a, $b, $c);
printf("%d-%d-%d-%d. <br/>", $value4, $a, $b, $c);
?>
