<?php

/**
 * Get a slice array from array object. With from parameter and
 * end parameter
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-3, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

/* Define two array */
$Go_Player_Rank = array(
    2689 => "时越", 2684 => "陈耀华",
    2667 => "王檄", 2657 => "古力",
    2648 => "周睿羊", 2644 => "柁嘉熹",
    2640 => "芈昱廷", 2623 => "范廷钰",
    2620 => "唐韦星", 2616 => "檀啸"
);
$Go_Player_Rank5To8 = array_slice($Go_Player_Rank, 4, -2);

/* Display the 5th to 8th player name and rank */
foreach ($Go_Player_Rank5To8 as $rank => $name) {
    echo "The rank is $rank, and name is $name<br/>";
}  /* You can know the relationship is lose. */
