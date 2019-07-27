<?php

/*
 * File name: Ch030602-LocalVariable.php
 * Create by Jedi Chou at 2013.4.19 11:02 AM.
 * Description:
 *   Demo for PHP local variable.
 */

// Define part
$var = 4;
function assignVar() {
    $var = 0;
    printf("In the assignVar method, \$var value is %d. <br/>", $var);
}

// Output part
assignVar();
printf("Out of the assignVar method, \$var value is %d. <br/>", $var);
?>
