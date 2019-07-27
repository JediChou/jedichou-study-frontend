<?php

/**
 * PHP In Action
 * @author JediChou
 */
class HtmlDocument {

    function getHTML() {
        return "<html><body>" . $this->getContent() . "</body></html>";
    }

    function getContent() {
        return '';
    }

}

class HelloWorld extends HtmlDocument {

    public $world;

    function __construct($world) {
        $this->world = $world;
    }

    // Overrides
    function getContent() {
        return "Hello, " . $this->world . "!";
    }

}

$greeting = new HelloWorld("Jedi Chou App - PIA020105");
echo $greeting->getContent();
