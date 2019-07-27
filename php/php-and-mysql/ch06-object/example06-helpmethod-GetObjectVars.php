<?php

/**
 * 了解对象字段（与get_class_vars大同小异）
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Employee {
    var $title = "Test Engineer";
    var $name = "San Francisco";
}

foreach (get_object_vars(new Employee()) as $key => $value) {
    echo "Key=$key, Value=$value <br/>";
}
