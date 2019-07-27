<?php

function greet($param) {
    // $retval = 'Hello ' . $param->name;
    // $result = array('greetReturn' => $retval);
    // $retval = 'Hello ' . $param->name;
    $result = 'Hello ' . $param[0];
    return $result;
}

$server = new SoapServer("hello.wsdl");
$server->addFunction("greet");
$server->handle();
?>
