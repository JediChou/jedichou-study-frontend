<?php

/*
 * File name : Ch030802-BitwiseOperator.php
 * Create by Jedi Chou at 2013.4.25 13:32 PM.
 * Description:
 *   Demo of bitwise operators.
 */

$a = 2;
$b = 3;

printf("%s"."<br/>", $a & $b);
printf("%s"."<br/>", $a | $b);
printf("%s"."<br/>", $a ^ $b);
printf("%s"."<br/>", ~$b);
printf("%s"."<br/>", $a << $b);
printf("%s"."<br/>", $a >> $b);
?>
