<?php

/**
 * Exchange key and value for array.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

$family = array(
    "Father" => "Jedi",
    "Mother" => "Becky",
    "Daughter" => "Kiwi"
);

print_r(array_flip($family));