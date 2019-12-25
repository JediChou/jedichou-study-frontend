<?php

/*
 * File name: Ch030602-StaticVariable.php
 * Create by Jedi Chou at 2013.4.19 11:59 AM.
 * Description:
 *   A demo for PHP static variables.
 */

// Define a static variable
STATIC $StaticVar = 1;

// Define some function to change static variable.
function FirstChangeStaticVar(){
    STATIC $staticVar = 0;
    $staticVar++;
}

function SecondChangeStaticVar() {
    STATIC $staticVar = 0;
    $staticVar += 2;
}

// Call these functions.
FirstChangeStaticVar();
SecondChangeStaticVar();

// Output static variables after call.
// Notice/result: The $StaticVar value is not change.
echo "Now \$StaticVar value is ", $StaticVar;
?>
