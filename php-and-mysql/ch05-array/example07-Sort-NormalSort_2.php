<?php

/**
 * Use normal method to sort array. But this method will not keep key-value
 * relationship.
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

$Family = array(
    "Father" => "Jedi Zhou",
    "Mother" => "Becky Wu",
    "Daughter" => "Kiwi Zhou"
);

sort($Family);
print_r($Family);