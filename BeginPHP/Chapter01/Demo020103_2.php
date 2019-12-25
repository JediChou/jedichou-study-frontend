<?php

// File Name: Demo020103_2.php

// check to make sure the first name is
// equal to Joe before granting access

// Jedi: 手动传参
$_POST['FirstName'] = 'Jedi';

if ($_POST['FirstName'] == 'JOE')
{
    echo '<p>';
    echo 'Hi ';
    echo $_POST['FirstName'];
    echo '</p>';
}
else
{
    echo '<p>';
    echo '你无法登陆';
    echo '</p>';
}