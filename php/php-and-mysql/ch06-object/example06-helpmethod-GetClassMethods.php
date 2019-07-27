<?php

/**
 * 获取类方法（只能看到public method）
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Employee {
    public function method_public(){}
    public function method2_public(){}
    protected function method_protected(){}
    private function method_private(){}
}

foreach (get_class_methods(new Employee()) as $method_name) {
    echo $method_name . "<br/>";
}
