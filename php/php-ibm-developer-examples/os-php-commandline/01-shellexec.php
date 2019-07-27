<?php

/*
 * File name: 01-shellexec.php
 * Create by Jedi Chou at 2013.4.26 9:04 AM.
 * Description:
 *   How to use php execute command line.
 * Idea from:
 * http://www.ibm.com/developerworks/cn/opensource/os-php-commandline/index.html
 */
$result = shell_exec("dir");
echo $result;
