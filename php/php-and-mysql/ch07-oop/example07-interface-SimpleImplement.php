<?php

/*
 * 实现一个接口
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou 
 */

header("Content-type: text/html; charset = utf-8");

interface calculator {
    function add($number1, $number2);
    function sub($number1, $number2);
    function mul($number1, $number2);
    function div($number1, $number2);
}

class MiniCalculator implements calculator {
    public function add($number1, $number2) {
        return $number1 + $number2;
    }
    public function sub($number1, $number2) {
        return $number1 - $number2;
    }
    public function mul($number1, $number2) {
        return $number1 * $number2;
    }
    public function div($number1, $number2) {
        return $number1 / $number2;
    }
}

foreach(get_class_methods("MiniCalculator") as $method) {
    echo $method . "<br/>";
}
