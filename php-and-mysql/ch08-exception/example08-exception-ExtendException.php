<?php

/*
 * 扩展一个异常
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-9, Jedi Zhou
 */

header("Content-type: text/html; charset=utf-8");

class My_Exception extends Exception {
    
    public $language = "";
    public $errorcode = "";
    
    function __construct($language, $errorcode) {
        parent::__construct($message, $code, $previous);
        $this->language = $language;
        $this->errorcode = $errorcode;
    }
    
    public function getMessageMap() {
        $errors = file("./" . $this->language . ".txt");
        $errorArray = array();
        foreach ($errors as $error) {
            list($key, $value) = explode(",", $error, 2);
            $errorArray[$key] = $value;
        }
        return $errorArray[$this->errorcode];
    }
    
}  // End My_Exception

// Throws and Catch
// TODO, 这个例子很不完整
try {
    throw new My_Exception("english", 3);
} catch (Exception $ex) {
    echo $ex->getMessageMap() . "<br/><br/>";
    echo $ex->getMessage() ." <br/>";
    echo $ex->getCode() . "<br/>";
    echo $ex->getLine() . "<br/>";
    echo $ex->getFile() . "<br/>";
    echo $ex->getTraceAsString() . "<br/>";
}
