<?php

// File Name: Demo020103_1.php
// check to make sure the first name is equal
// to Joe before granting access

$_POST['FirstName'] = 'Jedi';

if ($_POST['FirstName'] == 'Joe') {
    echo '<p>Hi ' . $_POST['FirstName'] . '</p>';
}
else {
    echo '<p>登录的用户不是Joe</p>';
}