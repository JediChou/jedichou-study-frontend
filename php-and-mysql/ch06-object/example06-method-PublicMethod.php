<?php

/**
 * @abstract define public method 
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) Jedi Zhou
 */
class Employee {
    
    function echoMsg() {
        echo "This is Employee->echoMsg()<br/>";
    }
    
    public function echoMsg2() {
        echo "This is Employee->echoMsg2()<br/>";
    }
}

// First method
Employee::echoMsg();

// Second method
$emp = new Employee();
$emp->echoMsg2();
