<?php

/**
 * Search key for array.
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright 2014-4-1, Jedi Zhou
 */

header("Content-type: text/html; charset=utf-8");

$Leads = array(
    "1921.7-1925.1" => "陈独秀",
    "1925.1-1928.7" => "陈独秀",
    "1928.7-1931.12" => "向忠发",
    "1934.1-1935.1" => "博古"
);

if (array_key_exists("1921.7-1925.1", $Leads)) {
    echo "这段时间有主席<br/>";
}
