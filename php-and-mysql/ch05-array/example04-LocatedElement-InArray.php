<?php

/**
 * Use in_array to check element existed.
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-1, Jedi Zhou
 */

$Personal_Sets = array("Jedi", "Becky", "Kiwi");
$Big_Family = array(
    "Chen BiYun", "Zhou ChuHe", "Jedi", "ZhouFang",
    "Chen Gong", "First NiangNiang", "Chen Lei",
    "Chen BiZhen", "Cao Jian", "Cao Hai",
    "Chen Nong", "Second NiangNiang", "Chen Kai",
    "Lasted ante", "Uncle Liu", "Liu Nian"
);

foreach ($Personal_Sets as $Faminily_indsider) {
    if (in_array($Faminily_indsider, $Big_Family)) {
        echo "The $Faminily_indsider in the Big family.<br/>";
    } else {
        echo "The $Faminily_indsider not in the Big family.<br/>";
    }
}