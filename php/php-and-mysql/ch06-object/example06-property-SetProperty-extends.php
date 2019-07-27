<?php

/*
 * @abstract 设置属性，并可扩展类的属性
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-4, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

class Employee {

    var $name;
    var $age;

    function __set($propertyName, $propertyValue) {
        $this->$propertyName = $propertyValue;
    }

}

// 创建一个实例，并分别设置两个属性的值。
$emp = new Employee();
$emp->name = "Jedi";
$emp->age = 23;
echo "The name: $emp->name, age: $emp->age <br/>";

// 在该实例中创建新字段，并显示到页面上去
$emp->title = "Sword Master";
echo "and $emp->name's title is $emp->title.";
