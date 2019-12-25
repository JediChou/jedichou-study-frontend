<?php

/**
 * Use array_search function to search in the array.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou
 */

header("Content-type: text/html; charset=utf-8");

$states["Ohio"] = "March 1";
$states["Delaware"] = "December 7";
$states["Pensylvania"] = "December 12";

$founded = array_search("December 7", $states);
if ($founded) printf("%s was founded on %s.", $founded, $states[$founded]);
