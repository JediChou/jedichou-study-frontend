<?php

/*
 * File name: Ch030802-LogicOperator.php
 * Create by Jedi Chou at 2013.4.24 11:31 AM.
 * Description:
 *   Demos of PHP logic operators.
 */

// Pre-define
$a = true; $b = false;
printf("\$a = %s<br/>", check($a));
printf("\$a = %s<br/><br/>", check($b));

// Operatiton and output.
printf("\$a && \$b = %s<br/>", check($a && $b));
printf("\$a AND \$b = %s<br/>", check($a AND $b));
printf("\$a || \$b = %s<br/>", check($a || $b));
printf("\$a OR \$b = %s<br/>", check($a OR $b));
printf("!\$a = %s<br/>", check(!$a));
// printf("%s<br/>", getBooleanResult(NOT $a));  // can not rewise
printf("\$a XOR \$b = %s<br/>", check($a XOR $b));

function check($statement) {
    if ($statement) return "true";
    return "false";
}
?>
