<?php

function getSum($begin, $end) {
    $total = 0;
    $array = range($begin, $end);
    foreach($array as $elt) {
        $total += $elt;
    }
    return $total;
}
