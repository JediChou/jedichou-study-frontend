<?php

/**
 * Use list method to get array. Reference by "Begining PHP and MySQL 3th 
 * edition".
 * @abstract 
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-3-31, Jedi Zhou
 */

// Open the example02-CreateArray-UseListMethod.txt file.
$users = fopen("example02-CreateArray-UseListMethod.txt", "r");

// While the EOF hasn't been reached, get next line
while ($line = fgets($users, 4096)) {
    // use explode() to separate each piece of data.
    list($$number, $occupation, $color) = explode("|", $line);
    
    // format tand output the data
    printf("Name: %s <br/>", $$number);
    printf("Occupation: %s <br/>", $occupation);
    printf("Favorite color: %s <br/>", $color);
    printf("<br/><br/>");
}
