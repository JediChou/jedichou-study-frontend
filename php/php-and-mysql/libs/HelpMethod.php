<?php

/**
 * 用于逐个打印数组中的元素，用于调试
 * @param type $array
 * @return boolean
 */
function printArrayElements($array) {
    if (is_array($array)) {
        foreach ($array as $key => $value) {
            echo "[$key]->$value  ";
        }
        echo "<br/>";
        return True;
    } else {
        return False;
    }
}
