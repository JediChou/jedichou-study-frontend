<?php

/*
 * File name: Cha030604-VarOfVar.php
 * Create by Jedi Chou at 2013.4.19 13:53 PM.
 * Description:
 *   Demo for the special PHP features, core is
 *   variable of variable.
 */

// Define, use this PHP features.
$mystr = "This ";
$$mystr = "is a ";
$$$mystr ="test. ";
$$$$mystr ="Puzzle?";

// Output result.
echo $mystr, $$mystr, $$$mystr, $$$$mystr;
?>
