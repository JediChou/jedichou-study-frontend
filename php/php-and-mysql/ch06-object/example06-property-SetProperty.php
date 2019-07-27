<?php

/**
 * @abstract 设置属性
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-4, Jedi Zhou
 */
class Employee {

    var $name;

    function __set($propertyName, $propertyValue) {
        echo "Nonexistent variable: \$$propertyName";
    }
}

$employee = new Employee();
$employee->name = "Mario";

// Output
echo $employee->name . "<br/>";
echo $employee->title . "<br/>";
