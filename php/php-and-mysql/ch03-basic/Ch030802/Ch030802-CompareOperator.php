<?php

/*
 * File name: Ch030802-CompareOperator.php
 * Create by Jedi Chou at 2013.4.24 11:56 PM.
 * Description:
 *   Demo of compare operators.
 */

printf("10 < 20 = %s"."<br/>", check(10 < 20));
printf("10 > 20 = %s"."<br/>", check(10 > 20));
printf("10 <= 20 = %s"."<br/>", check(10 <= 20));
printf("10 >= 20 = %s"."<br/>", check(10 >= 20));
printf("(1==12)?2:1 = %d", (1==12)?2:1);

function check($value) {
    if($value)
        return "true";
    return "false";
}
?>
