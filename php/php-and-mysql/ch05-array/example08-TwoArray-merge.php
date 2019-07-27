<?php

/**
 * Merge two array objects.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> 
 * @copyright (c) 2014-4-2, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

$Class_User1 = array("name" => "Jedi", "age" => 36);
$Class_User2 = array("name" => "Becky", "age" => 31);
$Class_Merge_Result = array_merge_recursive($Class_User1, $Class_User2);

print_r($Class_Merge_Result);
