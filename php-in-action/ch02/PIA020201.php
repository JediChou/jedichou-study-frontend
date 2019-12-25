<?php

/**
 * PHP In Action
 * @author Jedi Chou
 */
class config {
    function getDatabaseName() {
        throw New Exception("This s Exception for PIA020201.php");
    }
}

$config_obj = new config;

try {
    $config_obj->getDatabaseName();
} catch (Exception $e) {
    echo "<html><body>If echo, you get a exception message.</br>";
    echo $e->getMessage();
    echo "</html></body>";
}