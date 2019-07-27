<?php

/**
 * 随机打乱数组的排序结构，相当于扑克牌洗牌。
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-3, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

$KPI = array("甲", "乙", "丙", "丁");
shuffle($KPI);
        
print_r($KPI);
