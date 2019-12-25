<?php

/**
 * 求两个数组的交集，不过增加了键值的考量。
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-3, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

$IDPBG_KPI = array(0=>"优", 1=>"甲", 2=>"乙", 3=>"丙");
$GDSBG_KPI = array(1=>"甲", 2=>"乙", 3=>"丙", 4=>"丁");
$CESBG_KPI = array(1=>"甲", 2=>"乙", 4=>"丙");
$Business_Unit_KPI = array_intersect_assoc($IDPBG_KPI, $CESBG_KPI, $GDSBG_KPI);

print_r($Business_Unit_KPI);
