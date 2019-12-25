<?php

/*
 * File name: Ch020602-Parameters.php
 * Create by Jedi Chou at 2013.4.19 11:14 AM.
 * Description:
 *   How to use function parameters.
 */

function firstUseParameter($value) {
    return $value;
}

function secondUseParameter($value1, $value2) {
    return ($value1 * $value2);
}

printf("Call firstUseParameter, and result is %d. <br/>", firstUseParameter(230));
printf("Call secondUseParameter, and result is %d. <br/>", firstUseParameter(36 * 3));
?>
