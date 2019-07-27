<?php

/**
 * Delete the last elemenet for array.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou 
 */

function getLengths($array) {
    $size = 0;
    if (is_array($array)) {
        foreach ($array as $element) {
            $size += 1;
        }
    } else {
        return false;
    }
    return $size;
}

$Business_Units = array(
    1 => "SIDC", 2 => "GDSBG", 3 => "PCEBG",
    4 => "IDPBG", 5 => "CMMSG", 6 => "SHZBG"
);

for ($count = getLengths($Business_Units); $count > 0; $count--) {
    foreach ($Business_Units as $id => $department) {
        echo "[ID:$id Dep:$department] ";
    }
    echo "<br/>";
    array_pop($Business_Units);  /* delete last element */
}
