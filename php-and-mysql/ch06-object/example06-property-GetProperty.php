<?php

/*
 * @abstract 获取属性
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-4, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

class Employee {

    var $name;
    var $city;
    protected $wage;

    function __get($propertyName) {
        echo "__get called!<br/>";
        $vars = array("name", "city");
        if (in_array($propertyName, $vars)) {
            return $this->$propertyName;
        } else {
            return "No this property.<br/>";
        }
    }

}

$emp = new Employee();
$emp->name = "Jedi";

echo $emp->name . "<br/>";  //* Normal ouput */
echo $emp->pussy . "<br/>"; //* Property does not exist */
