<?php

/**
 * array_splice()函数会删除数组中从offset开始到offset + length
 * 结束的所有元素，并以数组的形式反馈所删除的元素。本例显示了该函数最简
 * 的处理。
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
$Go_Player_Rank6To10 = array_splice($Go_Player_Rank, 5);

/* 分别显示1-5，6-10名 */
printArrayElements($Go_Player_Rank);
printArrayElements($Go_Player_Rank6To10);
