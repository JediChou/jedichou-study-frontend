<?php

/**
 * 确认对象的子类
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Human{}
class Employee extends Human{}
class Manager extends Employee {}

$manager = new Manager();
if(is_subclass_of($manager, "Employee") && is_subclass_of($manager, "Human")) {
    echo "\$manager is subclass of Human<br/>";
    echo "\$manager is subclass of Employee<br/>";
}
