<?php

/* function define */
function calcSalesTax($price, $tax) {
    $total = $price + ($price * $tax);
    return $total;
}

/* call function and output */
echo "The total price is: " . calcSalesTax(100, 10) . "<br/>";