<?php

/**
 * 自动加载所需要的类
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");
function __autoload($class) {
    require_once("./class/$class.php");
} /* 这里可以写一些检查用的代码 */

class AutoLoadExample {
    public $Book;
    public function __construct() {
        $this->Book = new Book("Star War", "XXX-XXX", "Jedi");
    }
}

$ale = new AutoLoadExample();
echo $ale->Book->getBookName() . "<br/>";
