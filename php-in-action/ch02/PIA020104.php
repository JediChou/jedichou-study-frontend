<?php

/**
 * PHP In Action
 * @author Jedi Chou
 */
class HelloWorld {

    public $world;

    function __construct($world) {
        $this->world = $world;
    }

    function getHtml() {
        return "<html><body>" .
        "Hello, " . $this->world . "!" .
        "</body></html>";
    }

}

$greeting = new HelloWorld("Jedi Chou");
echo $greeting->getHtml();
