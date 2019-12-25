<?php
$userAges = array("Abby"=>18, "Sammy"=>17, "Sarah"=>22);
$a = each($userAges);

/////////////////////////////////////
// show - use index style
// echo $a[0] . ": ". $a[1] ."<br/>";

/////////////////////////////////////
// show - key value style
// echo $a['key'] . ": ". $a['value'] ."<br/>";

/////////////////////////////////////
// show - move next record.
$a = each($userAges);
echo $a['key'] . ": ". $a['value'] ."<br/>";

// TODO 以下的显示有问题
// echo $a;