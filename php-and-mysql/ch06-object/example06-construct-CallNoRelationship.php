<?php

/** 
 * 初始化时候调用另一个毫无关系的构造函数。
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-7, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class JediDeployee {
    public static function __construct() {
        echo "JediDeployee's construct<br/>";
    }
}

class Employee {
    public function __construct() {
        JediDeployee::__construct();
        echo "Employee's constructor";
    }
}

// TODO: 这里调用不了
$emp = new Employee();
