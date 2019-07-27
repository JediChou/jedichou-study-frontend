<?php

/**
 * Combine two arrays, one become keys, other become value.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

$User_Rank = array(1, 2, 3);
$User_Name = array("Jedi", "Becky", "Kiwi");
$User_Merge_Result = array_combine($User_Rank, $User_Name);

print_r($User_Merge_Result);
