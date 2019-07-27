<?php

abstract class HtmlDocument {
    
    /*
     * Function name: getHtml
     * Description: return a html page
     */
    public function getHtml() {
        return "<html><body>" . $this->getContent(). "</body></html>";
    }
    
    /*
     * Function name: getContent
     * Description: a abstract method. You must extend class and use it.
     */
    abstract public function getContent();
    
}

class MyDocument extends HtmlDocument {
    public function getContent() {
        return " <h1>Jedi</h1> ";
    }
}

$myobj = new MyDocument();
echo $myobj->getHtml();