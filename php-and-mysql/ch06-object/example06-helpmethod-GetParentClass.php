<?php

/**
 * 确认对象的父类
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Employee{}
class Manager extends Employee{}

$manger = new Manager();
echo get_parent_class($manger);
