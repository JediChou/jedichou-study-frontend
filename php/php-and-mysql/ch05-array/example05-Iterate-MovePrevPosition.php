<?php

/**
 * Use prev to move array pointer position.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou 
 */

header("Content-type: text/html; charset = utf-8");

/* Define a array and move pointer to tail */
$Leaders = array("毛泽东", "邓小平", "江泽民", "胡锦涛");
next($Leaders); 
next($Leaders);
next($Leaders);

/* Print current element */
$Leader = current($Leaders);
echo("$Leader<br/>");

/* Move point, and print current element */
prev($Leaders);
$Leader = current($Leaders);
echo("$Leader<br/>");
