<?php

/*
 * File name: Ch030603_UseGlobalVars.php
 * Create by Jedi Chou at 2013.4.19 13:48 PM.
 * Description:
 *   Use global variable to print ip and browser infomations.
 */

printf("Local IP is %s<br/>", $_SERVER["REMOTE_ADDR"]);
printf("Current browser is %s<br/>", $_SERVER["HTTP_USER_AGENT"]);
?>
