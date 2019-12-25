<?php

/**
 * 最简单的静态变量示例
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-7, Jedi Zhou 
 */
header("Content-type: text/html; charset = utf-8");

class Employee {

    private static $counter = 0;

    public function __construct() {
        self::$counter++;
        echo "Counter value is " . $this->getCounter() . "<br/>";
    }
    
    private function getCounter() {
        return self::$counter;
    }

}

// 连续构造Employee实例
foreach (range(1, 10) as $value) {
    new Employee();
}

