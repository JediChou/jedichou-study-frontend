<?php

/**
 * @abstract 创建用户自定义的属性设置器和获取器。
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-4, Jedi Zhou
 */
class Employee {

    private $name;

    public function setName($name) {
        $this->name = $name;
    }

    public function getName() {
        return $this->name;
    }

}

$emp = new Employee();
$emp->setName("Jedi Zhou");
echo $emp->getName() . "<br/>";

