<?php

/**
 * 调用父类的构造函数
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-7, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Employee {

    protected $name;
    protected $title;

    public function __construct() {
        echo "<p>This is Employee's constrct method.</p>";
    }

}

class Manager extends Employee {

    public function __construct() {
        parent::__construct();
        echo "<p>OK! This is Manager's constrct method.</p>";
    }

}

$manger = new Manager();
