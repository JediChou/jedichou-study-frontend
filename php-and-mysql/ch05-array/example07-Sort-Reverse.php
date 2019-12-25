<?php

/** 
 * Reverise array elements.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

$Numbers = array_reverse(range(1, 10));
$Chars = array_reverse(range("a", "h"));

print_r($Numbers); echo("<br/>");
print_r($Chars);
