<?php

/**
 * 最简单的命名空间使用示例
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-9, Jedi Zhou
 */

// 直接引入会产生以下错误
// Message: Fatal error: Cannot redeclare class ...

// 申明方式也与本书略有不同（本特性在PHP6中会有改变）
// 1. $obj = new name1::Jedi();  <- failed
// 2. $obj = new \name1\Jedi();  <- success

// 引入两个类库
include "example07-namespace-lib.php";
include "example07-namespace-utilize.php";

// 輸出
$name1_jedi_object = new \name1\Jedi();
$name2_jedi_object = new \name2\Jedi();
echo "\$name1_jedi_object, " . $name1_jedi_object->getNumber() . "<br/>";
echo "\$name1_jedi_object, " . $name1_jedi_object->getString() . "<br/>";
echo "\$name2_jedi_object, " . $name2_jedi_object->getDate() . "<br/>";
echo "\$name2_jedi_object, " . $name2_jedi_object->author . "<br/>";
echo "\$name2_jedi_object, " . $name2_jedi_object->version . "<br/>";
