<?php

/*
 * File name: Ch030903-HereDoc.php
 * Create by Jedi Chou at 2013.4.25 17:27 PM.
 * Description:
 *   How to use heredoc feature.
 */

$website = "http://www.romatermini.it";
echo <<<EXCERPT
<p>Rome's central train station, know as <a href="$website">Roma Termini</a>,
was built in 1867. Because it had fallen into severe disrepair in the late 20th
century, the government knew that considerable resources were required to
rehabilitate the station prior to the 50-year <i>Giubileo</i>.</p>
EXCERPT;
?>
