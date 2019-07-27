<?php

/**
 * 获取上下文（知道是哪个类）
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou 
 */
header("Content-type: text/html; charset= utf-8");

class Employee{}
class Manager extends Employee {}

$manager = new Manager();
echo get_class($manager) . "<br/>";
