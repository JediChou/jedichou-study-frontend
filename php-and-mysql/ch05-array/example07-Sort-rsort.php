<?php

/**
 * Use rsort() to sort array. Execute this function, the array will
 * be sorted, and result sorted not same as sort.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

$Family = array("1" => "a Jedi", "2" => "b Becky", "3" => "c Kiwi");
rsort($Family);
print_r($Family);
