<?php

/**
 * Calculate elements frequnce.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

$Leaders = array(
    "第一届" => "Tobe",
    "第二届" => "Tobe",
    "第三届" => "Aford",
    "第四届" => "Liu Jian",
    "第五届" => "Jedi Zhou"
);

print_r(array_count_values($Leaders));