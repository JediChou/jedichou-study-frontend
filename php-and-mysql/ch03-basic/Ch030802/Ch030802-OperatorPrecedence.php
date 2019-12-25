<?php

/*
 * File name: Ch030802-OperatorPrecedence.php
 * Create by Jedi Chou at 2013.4.19 14:55 PM.
 * Description:
 *   Demo for Operator Precedence.
 *   Feature: 操作符优先级
 */

$cost = 300;
$total_1st = $cost + $cost * 0.6;
$total_2nd = $cost + ($cost * 0.6);

if($total_1st == $total_2nd) {
    echo "The operator is effective.";
}
?>
