<?php

/**
 * 对象检查，查看是否属于某个对象
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-7, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

// Define class
class Employee {
   private $title = ""; 
}

class Foxconn {
    private $workid = "";
}

// Create object
$emp = new Employee();
$fcn = new Foxconn();

// Check
if ($emp instanceof Employee) {
    echo "\$emp is instance of Employee<br/>";
}
if (!$emp instanceof Foxconn) {
    echo "\$emp is not instance of Foxconn<br/>";
}
if ($fcn instanceof Foxconn) {
    echo "\$fcn is instance of Foxconn<br/>";
}
if (!$fcn instanceof Employee) {
    echo "\$fcn is not instance of Foxconn<br/>";
}
