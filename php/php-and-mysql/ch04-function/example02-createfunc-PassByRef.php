<?php

/* variables define, function define */
$cost = 100; $tax = 10;
function calcSalesTax(&$cost, $tax) {
    $cost = $cost + ($cost * $tax);
}

/* call it and ouput */
calcSalesTax($cost, $tax);
echo "The total cost is: $cost <br/>";
