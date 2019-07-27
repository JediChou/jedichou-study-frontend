<?php

/**
 * 获取类的字段信息（也是只能获取public域的）
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Employee {
    var $title = "Tester Engineer";
    var $name = "Jedi";
    var $age = 36;
    protected $work_years;
}

foreach (get_class_vars("Employee") as $field => $value) {
    echo "$field: $value<br/>";
}
