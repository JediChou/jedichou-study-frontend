<?php

/**
 * Description of Book
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */
class Book {

    private $Book_name = "";
    private $Book_isdn = "";
    private $Book_first_author = "";

    public function __construct($name, $isdn, $first_author) {
        $this->setBookName($name);
        $this->setBookISDN($isdn);
        $this->setFirstAuthor($first_author);
    }

    public function setBookName($name) {
        $this->Book_name = $name;
    }

    public function getBookName() {
        return $this->Book_name;
    }

    public function setBookISDN($isdn) {
        $this->Book_isdn = $isdn;
    }

    public function getBookISDN() {
        return $this->Book_isdn;
    }
    
    public function setFirstAuthor($author_name) {
        $this->Book_first_author = $author_name;
    }
    
    public function getFirstAuthor() {
        return $this->Book_first_author;
    }
    
}
