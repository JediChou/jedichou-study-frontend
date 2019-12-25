<?php

/**
 * A simple PHP class.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-4, Jedi Zhou
 */
class example06_Employee {

    private $name = "John";
    private $title = "IT technical master";
    protected $wage = "";

    protected function clockIn() {
        echo "Member $this->$name clocked in at " . date("h:i:s");
    }

    protected function clockOut() {
        echo "Member $this->$name clocked out at " . date("h:i:s");
    }

}

$employee = new example06_Employee();
