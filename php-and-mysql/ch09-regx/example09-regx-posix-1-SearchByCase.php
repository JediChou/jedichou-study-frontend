<?php

/*
 * @abstract 以区分大小写的方式进行搜索
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-9, Jedi Zhou
 */

header("Content-type: text/html; charset=utf-8");

$user_name = "jedichoU";
if(ereg("[^a-z]", $user_name)) {
    echo "User name must be all lowcase";
} else {
    echo "User name is all lowcase";
}
