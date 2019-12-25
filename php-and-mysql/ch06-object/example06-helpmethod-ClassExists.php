<?php

/**
 * 查看某个类是否定义
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-7, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Employee{}
if (class_exists("Employee")) echo "Employee is exists<br/>";
if (!class_exists("Monst")) echo "Monst is not exists<br/>";
