<?php

/**
 * 了解声明类
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Employee{}
class Manager{}

// Employee和Manager是数组的最后两个
foreach( get_declared_classes() as $class_name) {
    echo $class_name . "<br/>";
}
