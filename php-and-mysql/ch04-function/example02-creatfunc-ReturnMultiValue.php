<?php

/** 
 * Function return multi result
 * @abstract
 * 
 * @author Jedi Zhou
 * @copyright (c) 2014, Jedi Zhou
 */
function getMultValue() {
    $users[] = "User-1";
    $users[] = "User-2";
    $users[] = "User-3";
    return $users;
}

list($user1, $user2, $user3) = getMultValue();
echo "User: $user1, User: $user2, User: $user3 <br/>";
