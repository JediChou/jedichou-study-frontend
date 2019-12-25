<?php

/*
 * 从基类进行继承 
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

// Base
class Employee {
    private $name;
    public function setName($name) {
        if($name == "") {
            echo "Name can not be null";
        } else {
            $this->name = $name;
        }
    }
    public function getName(){
        return "My name is " . $this->name;
    }
}

// Child
class Manager extends Employee {
    function pillageCompany() {
        return "I'm selling asset of company<br>";
    }
}

// Define and output
$manager = new Manager();
$manager->setName("John");
echo $manager->getName() . "<br/>";
echo $manager->pillageCompany();
