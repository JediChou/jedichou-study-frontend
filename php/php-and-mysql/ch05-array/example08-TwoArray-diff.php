<?php

/**
 * 求两个数组的差集 
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-3, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

$IDPBG_KPI = array("优", "甲", "乙", "丙");
$GDSBG_KPI = array("甲", "乙", "丙", "丁");
$KPI_Different = array_diff($IDPBG_KPI, $GDSBG_KPI);

/* 注意: 该结果是“[0] => 优”，而不是“[0] => 优 [1] => 丁” */
print_r($KPI_Different);
