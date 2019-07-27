<?php

/*
 * 演示最簡單的PHP Class.
 */
class HelloWorld {

    public $world = 'World';

    function getHtml() {
        return "<html><body>" .
        "Hello, " . $this->world . "!" .
        "</body></html>";
    }

}

$greetings = new HelloWorld();
echo $greetings->getHtml();