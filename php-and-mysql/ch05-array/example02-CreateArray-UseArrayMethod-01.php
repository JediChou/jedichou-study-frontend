<?php

/**
 * Use array method to create an array. 
 * @abstract
 * @author Jedi Zhou <skeyzhx@163.com> or <jedi.h.zhou@mai.foxconn.com>
 * @copyright (c) 2014-3-31, Jedi Zhou
 */

$chess_elo_rank = array(
    "Kasparov, Garray", "Kramnik, Vladimir", "Anand, Viswanathan",
    "Morozevich, Alexander", "Adams, Michael", "Shirov, Alexei",
    "Leko, Peter", "Ivanchun, Vassily", "Topalov, Veselin",
    "Krasenkow, Michal"
);

foreach($chess_elo_rank as $player) {
    echo $player . "<br/>";
}
