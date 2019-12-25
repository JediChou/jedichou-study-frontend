<?php

/**
 * @abstract 最简单的对象克隆
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class FoxconnEmployee {
    public $name="Jedi Zhou";
    public $workid="f3216338";
}

// 第一次比较
$foxconn_emp = new FoxconnEmployee();
$foxconn_empc = clone $foxconn_emp;
if($foxconn_emp == $foxconn_empc) {
    echo "两者完全相同，是一个对象<br/>";
}

// 第二次比较
$foxconn_empc->name = "DaPeng";
if($foxconn_emp == $foxconn_empc) {
    echo "两者完全相同，是一个对象<br/>";
} else {
    echo "两者不是一个对象<br/>";
}
