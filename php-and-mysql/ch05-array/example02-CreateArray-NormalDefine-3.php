<?php

/**
 * Use normal method to create an array.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-3-31, Jedi Zhou
 */

$family["GrandFather"] = "Chen XiNian";
$family["GrandMother"] = "Liu BiZhen";
$family["Father"] = "Zhou ChuHe";
$family["Mother"] = "Chen BiYun";
$family["Me"] = "Jedi Zhou";
$family["Wife"] = "Becky Wu";
$family["Daughter"] = "Kiwi Zhou";

foreach ($family as $value => $value) {
    echo "The family location is <u>". $value . "</u> ";
    echo ", and name is <u>" . $value . "</u><br/>";
}
