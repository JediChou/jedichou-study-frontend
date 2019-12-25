<?php

/** 
 * @abstract 定义常量
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-4, Jedi Zhou
 */
class MyConstant {
    const BU = "FOXCONN-SIDC";
    const GATE = "South gate";
}

echo MyConstant::BU . "<br/>";
echo MyConstant::GATE . "<br/>";
