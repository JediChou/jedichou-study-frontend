<?php

/**
 * 随机获取数组中的键。
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-3, Jedi Zhou 
 */
header("Content-type: text/html; charset = utf-8");

$IDPBG_KPI = array("优", "甲", "乙", "丙", "丁");
$Random_KPIs = array_rand($IDPBG_KPI, 2);

print_r($Random_KPIs);