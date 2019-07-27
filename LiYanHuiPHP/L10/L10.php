<?php
$username = array('Jedi', 'Becky', 'Kivi');
$numbers = range(1, 20);
$characters = range('a', 'i');

//print_r($characters);
//print(count($characters));
foreach ($characters as $key => $value) {
    echo "$key => $value<br/>";
}