<?php

/*
 * File name: Ch030603_PrintAllGlobalVar.php
 * Create by Jedi Chou at 2013.4.19 13:04 PM.
 * Description:
 *   Use a loop to print all enviorment variables.
 */

foreach ($_SERVER as $var => $value) {
    echo "$var => $value <br/>";
}
?>
