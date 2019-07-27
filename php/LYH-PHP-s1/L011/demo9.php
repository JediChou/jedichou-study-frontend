<?php
$userAges = array("Abby"=>18, "Sammy"=>17, "Sarah"=>22);

// Show: Use for
//for ($count = 0; $count < count($userAges); $count++) {
//    $pair = each($userAges);
//    echo "User: " . $pair['key'] . " Age:" . $pair['value'] . "<br/>";
//}

// Show: !! 表示数据还原为布尔值

// Show: Use while
while ($elt = each($userAges)) {
    echo "User: " . $elt['key'] . " Age:" . $elt['value'] . "<br/>";
}
