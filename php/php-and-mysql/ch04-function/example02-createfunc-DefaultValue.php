<?php

/**
 * Create a simple function. And it has a default value, we call it twice. The
 * first time, we call it with a parameter. The second with two parameters.
 * @abstract
 * 
 * @author: Jedi Zhou
 * @copyright (c) 2014, Jedi Zhou
 */
function calcSalesTax($cost, $tax = 1) {
    $total = $cost + $cost * $tax;
    return $total;
}

echo "1st call, return: \$total = " . calcSalesTax(100) . "<br/>";
echo "2nd call, return: \$total = " . calcSalesTax(100, 10) . "<br/>";
