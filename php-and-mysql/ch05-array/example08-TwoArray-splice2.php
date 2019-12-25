<?php

/**
 * array_splice()函数会删除数组中从offset开始到offset + length
 * 结束的所有元素，并以数组的形式反馈所删除的元素。本例显示了该函数第二
 * 种处理方式，通过增加两个参数来实现元素的替换。
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-3, Jedi Zhou
 */
require_once '.././libs/HelpMethod.php';

header("Content-type: text/html; charset = utf-8");

/* 定义两个数组，用于进行array_splice函数的演示 */
$Go_Player_Rank = array(
    2689 => "时越", 2684 => "陈耀华",
    2667 => "王檄", 2657 => "古力",
    2648 => "周睿羊", 2644 => "柁嘉熹",
    2640 => "芈昱廷", 2623 => "范廷钰",
    2620 => "唐韦星", 2616 => "檀啸"
);
array_splice($Go_Player_Rank, 1, -1, array(1600 => "Jedi"));

/*
 * Notice:
 *   结果是：[0]->时越 [1]->Jedi [2]->檀啸
 *   1. 原数组第1个、最后1个元素被保留
 *   2. 增加了参数中的数组元素（而不是数组）
 */
printArrayElements($Go_Player_Rank);
