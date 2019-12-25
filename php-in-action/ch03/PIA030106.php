<?php

/*******************************************************************************
 * Warning: The magic method __get() must have public visibility and cannot be
 *          static in D:\xampp-1.8.2\htdocs\phpinaction\ch03\PIA030106.php on 
 *          line 8
 * Warning: The magic method __set() must have public visibility and cannot be
 *          static in D:\xampp-1.8.2\htdocs\phpinaction\ch03\PIA030106.php on 
 *          line 12
 * ******************************************************************************
 * if you write
 *      private function __get($name)
 *      private function __set($name, $value)
 * you will get two warning messages.
 */

class Document {

    private $_text;

    private function __get($name) {
        $method = 'get' . $name;
        return $this->$method();
    }

    private function __set($name, $value) {
        $method = 'set' . $name;
        return $this->$method($value);
    }

    function getText() {
        return $this->_text;
    }

    function setText($text) {
        $this->_text = $text;
    }

}

$myvar = new Document();
echo "Before change <h1>" . $myvar->getText() . "</h1><br/>";

$myvar->setText("abc");
echo "After change <h1>" . $myvar->getText() . "</h1><br/>";
