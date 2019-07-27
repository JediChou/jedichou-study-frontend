<?php

/*
 * 继承父类的构造函数
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Employee {
    function __construct() {
        echo "This is Employee __construct.<br/>";
    }
}

class Manager extends Employee {
    function __construct() {
        parent::__construct();
        echo "This is Manager __construct.<br/>";
    }
}

new Manager();
