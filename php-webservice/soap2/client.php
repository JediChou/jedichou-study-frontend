<?php
$a = array("Jedi", "other");

try {
    $client = new SoapClient('hello.wsdl');
    $result = $client->__soapCall('greet', array('Jedi', 'Other'));
    printf("Result = %s", $result);
} catch (Exception $e) {
    printf("Message = %s", $e->__toString());
}
?>
