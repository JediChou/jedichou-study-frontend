<?php

/*
 * 进行一个最简单的抛异常 
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-9, Jedi Zhou
 */

header("Content-type: text/html; charset=utf-8");

try {
    throw new Exception("Jedi Zhou - Excepetions.");
} catch (Exception $ex) {
    echo $ex->getMessage() ." <br/>";
    echo $ex->getCode() . "<br/>";
    echo $ex->getLine() . "<br/>";
    echo $ex->getFile() . "<br/>";
    echo $ex->getTraceAsString() . "<br/>";
    
    // $ex->getTrace() 返回一个数组
}
