<?php

/*
 * File name: 02-NormalRead-ReadURL.php
 * Create by Jedi Chou at 2013.4.26 8:51 aM.
 * Description:
 *   Use normal file read mode to read a url.
 * Idea from:
 * http://www.ibm.com/developerworks/cn/opensource/os-php-readfiles/
 */
$file_handle = fopen("http://localhost/ibmdevphp/os-php-readfiles/01-NormalRead.php", "r");
while (!feof($file_handle)) {
    $line = fgetc($file_handle);
    echo $line;
}
fclose($file_handle);
?>
