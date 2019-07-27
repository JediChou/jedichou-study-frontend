<?php

/** 
 * Reverise array elements with parameter. And this parameter will
 * keep key-value relationship.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

$Numbers = array_reverse(range(1, 10), 1);
$Chars = array_reverse(range("a", "h"), 1);

print_r($Numbers); echo("<br/>");
print_r($Chars);
