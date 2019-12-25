<?php

/*
 * File name: Ch030602-GlobalVariable.php
 * Create by Jedi Chou at 2013.4.19 11:39 AM.
 * Description:
 *   A demo for PHP global variable.
 */

// Define a global variable and change value functions.
$GlobalVar1 = 15;
$GlobalVar2 = 30;

function increaseGlobalVar() {
    // Method 1: $GLOBALS["variable_name"]
    $GLOBALS["GlobalVar1"]++;
}

function doubleGlobalVar() {
    // Method 2: Use GLOBAL variable_name
    GLOBAL $GlobalVar2;
    $GlobalVar2 *= $GlobalVar2;
}

// Call functions
increaseGlobalVar();
doubleGlobalVar();

// Output result
// This method not same as other languages.
echo "Now \$GlobalVar1 value is ", $GlobalVar1, ".<br/>";
echo "Now \$GlobalVar2 value is ", $GlobalVar2, ".<br/>";
?>
