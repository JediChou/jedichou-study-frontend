<?php

// Define variables
$remaining_cards = 0;
$url = "";

if($remaining_cards > 0) {
    $url = '/deal.php';
    $text = "Deal More Cards";
} else {
    $url = '/new-game.php';
    $text = "Start a new Game";
}

print <<< HTML
<p>There are <b>$remaining_cards</b> left.</p>
<p><a href="$url">$text</a></p>
HTML;
