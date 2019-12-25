<?php

/**
 * Use standard method to move pointer to end for array.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

$Leaders  = array("毛泽东", "邓小平", "江泽民", "胡锦涛");

// Print current value
end($Leaders);
echo(current($Leaders) . "<br/>");
