<?php

/**
 * Get array's size with count($array, 1).
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");
$Citys = array("武汉", "深圳", array("汕头", "珠海"));
echo(count($Citys, 1) . "<br/>");