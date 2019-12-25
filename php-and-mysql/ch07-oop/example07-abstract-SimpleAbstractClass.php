<?php

/*
 * @abstract 最简单的抽象类
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

// 类定义
abstract class Employee { public $name="周颢", $age=36; }
class Manager extends Employee {}

// 需继承
$manger = new Manager();
echo $manger->name . ", " . $manger->age;
