<?php

/**
 * Sort by key for array.
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, John Doe
 */

header("Content-type: text/html; charset = utf-8");

$array = array("z" => "Jedi", "t" => "Becky", "a" => "Kiwi");
ksort($array);
print_r($array);
