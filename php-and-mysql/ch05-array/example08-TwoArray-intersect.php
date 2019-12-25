<?php

/**
 * 求两个数组的交集
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-3, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

$IDPBG_KPI = array("优", "甲", "乙", "丙");
$GDSBG_KPI = array("甲", "乙", "丙", "丁");
$CESBG_KPI = array("甲", "乙", "丙");
$Business_Unit_KPI = array_intersect($IDPBG_KPI, $CESBG_KPI, $GDSBG_KPI);

print_r($Business_Unit_KPI);
