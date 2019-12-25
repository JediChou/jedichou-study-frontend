<?php

/**
 * 一个简单的构造函数初始化
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-7, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Book {

    private $title;
    private $isbn;
    private $copies;

    public function __construct($isbn) {
        $this->setIsbn($isbn);
        $this->getTitle();
        $this->getNumberCopies();
    }

    public function setIsbn($isbn) {
        $this->isbn = $isbn;
    }

    public function getTitle() {
        $this->title = "Beginning Python";
        echo "Title: " . $this->title . "<br/>";
    }

    public function getNumberCopies() {
        $this->copies = 5;
        echo "Number of copies available " . $this->copies . "<br/>";
    }

}

$book = new Book("ABCD-EF-1192");
