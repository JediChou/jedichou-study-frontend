<?php

/*
 * File name: 01-NormalRead.php
 * Create by Jedi Chou at 2013.4.26 8:41 AM.
 * Description:
 *   Normal file read mode.
 *   1. Open file, and storage file reference to handle variable.
 *   2. Check current line is end to file.
 *   3. Read line until to file last line.
 *   4. Close file handle.
 * Idea from
 *   http://www.ibm.com/developerworks/cn/opensource/os-php-readfiles/
 */
$file_handle = fopen("./target.txt", "r");
while (!feof($file_handle)) {
    $line = fgets($file_handle);
    echo $line."<br/>";
}
fclose($file_handle);
?>
