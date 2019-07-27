<?php

/**
 * 确认对象中是否有指定的方法
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-7, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Employee {
    public function getConstString() {
        return "abc";
    }
    public function getConstNumber() {
        return 1234567;
    }
}

$employee = new Employee();
$methods = array("getConstString", "getConstNumber", "getName");
foreach ($methods as $method) {
    if(method_exists($employee, $method)) {
        echo "\$employee有方法$method.<br/>";
    } else {
        echo "\$employee无此方法$method.<br/>";
    }
}
