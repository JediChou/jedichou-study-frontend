<?php

/**
 * Use asort() to sort array. This method will be keep
 * key-value relationship.
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

$family = array(
    "父亲" => "周颢",
    "母亲" => "吴俊蓉",
    "女儿" => "文心"
);

asort($family);
print_r($family);
