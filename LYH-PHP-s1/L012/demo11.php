<?php



demo11();

// Show: 跳转数组的指针
function demo11()
{
    $userAges = array("Abby"=>18, "Sammy"=>17, "Sarah"=>22);  // key-value
    $array = array('Abby', "Sammy", "Sara", "Sarah", "Lin");  // only elements

    $a = each($userAges);
    echo $a['key'] . " " . $a['value'] . "<br/>";

    $a = each($userAges);
    echo $a['key'] . " " . $a['value'] . "<br/>";

    $a = each($userAges);
    echo $a['key'] . " " . $a['value'] . "<br/>";

    reset($userAges);
    $a = each($userAges);
    echo $a['key'] . " " . $a['value'] . "<br/>";
}

