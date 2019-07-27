<?php

/*
 * File name: Ch030802-EqualOperator.php
 * Create by Jedi Chou at 2013.4.24 11:43 PM.
 * Description:
 *   Demo of PHP equal operator.
 */

class person {
    private $name;
    private $age;

    function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
}

$person1 = new person("Jedi", 34);
$person2 = new person("Becky", 29);
$person3 = $person1;

printf("person1 == person2, result is %s<br/>", check($person1 == $person2));
printf("person1 == person3, result is %s<br/>", check($person1 == $person3));
printf("person1 != person2, result is %s<br/>", check($person1 != $person2));
printf("person1 != person3, result is %s<br/>", check($person1 != $person3));
printf("person1 === person2, result is %s<br/>", check($person1 === $person2));
printf("person1 === person3, result is %s<br/>", check($person1 === $person3));

function check($value) {
    if ($value)
        return "true";
    return "false";
}

?>
