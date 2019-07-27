<?php

/**
 * Get a slice array from array object.
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

/* Define two single array, a mixed array */
$SIDC_Friends = array(
    1 => "Wu Meng", 2 => "Ray",
    3 => "Zhang BaoJun", 4 => "Lin ZhangZhu"
);

$ACOUNT_Friends = array(
    1 => "Lin HaiHong", 2 => "Li DaPeng",
    3 => "Xiong Gang", 4 => "Cai ZhiQuan"
);

$Total_Friends = array($SIDC_Friends, $ACOUNT_Friends);

/* Process its */
foreach($Total_Friends as $Location_Friend) {
    $Temp_Friend_Array = array_slice($Location_Friend, 2);
    foreach($Temp_Friend_Array as $Friend_Name) {
        echo $Friend_Name . ", ";
    }
    echo "<br/>";
}
