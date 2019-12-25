<?php

/*
 * 对象克隆的第二个例子（书上的例子），我修改了下。
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou 
 */

header("Content-type: text/html; charset = utf-8");

class Corporate_Drone {

    public $employee_id;
    public $tiecolor;

    // setter for $employee_id
    public function setEmployeeID($id) {
        $this->employee_id = $id;
    }

    // getter for $employee_id
    public function getEmployeeID() {
        return $this->employee_id;
    }

    // setter for $tiecolor
    public function setTiecolor($color) {
        $this->tiecolor = $color;
    }

    // getter for $tiecolor
    public function getTiecolor() {
        return $this->tiecolor;
    }

}

// create a drone object
$drone_first = new Corporate_Drone();
$drone_first->setEmployeeID("f3216338");
$drone_first->setTiecolor("RED");

// create a clone object
$drone_second = clone $drone_first;
$drone_second->setEmployeeID("6789");
$drone_second->setTiecolor("BLUE");

// Display
foreach(array($drone_first, $drone_second) as $object) {
    foreach(get_object_vars($object) as $key=>$value) {
        echo get_class($object) . ", key=$key, value=$value<br/>";
    }
}
