<?php

/**
 * 最简单的析构函数
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-7, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Employee {

    public function __construct() {
        echo "Employee's __construct<br>";
    }

    public function __destruct() {
        echo "Employee's __destruct<br/>";
    }

}

$emp = new Employee();
