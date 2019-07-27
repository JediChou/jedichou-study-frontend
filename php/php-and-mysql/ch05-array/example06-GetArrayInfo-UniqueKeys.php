<?php

/**
 * Get unique from current array.
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

$Keys_Duplicated = array("a","a","b","b","c","c");
$Keys_UniqueKyes = array_unique($Keys_Duplicated);

print_r($Keys_Duplicated); echo("<br/>");
print_r($Keys_UniqueKyes);
