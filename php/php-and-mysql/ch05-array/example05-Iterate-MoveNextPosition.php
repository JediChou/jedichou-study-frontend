<?php

/**
 * Use next function to move pointer position.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou 
 */

header("Content-type: text/html; charset = utf-8");
$Leaders = array("毛泽东", "邓小平", "江泽民", "胡锦涛");

$Current_Leader = current($Leaders);
printf("%s<br/>", $Current_Leader);

$Current_Leader = next($Leaders);
printf("%s<br/>", $Current_Leader);
