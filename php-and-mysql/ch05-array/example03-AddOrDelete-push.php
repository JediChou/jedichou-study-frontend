<?php

/**
 * Add elements at tail of array.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou
 */

$sites = array(1 => "csdn.net", 2 => "sourceforge.net");
array_push($sites, "google.com");
array_push($sites, "bing.com");

foreach ($sites as $site) {
    echo "$site <br/>";
}
