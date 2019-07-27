<?php

// Description: Use SimpleXML to read a XML file.
// Student: Jedi Chou
// Code from: PHP Cookbook, 2nd Chinese Edition

$sx = simplexml_load_file('address-book.xml');
foreach($sx->person as $person) {
    $firstname_text_value = $person->firstname;
    $lastname_text_value = $person->lastname;  
    print "<p>$firstname_text_value $lastname_text_value</p>\n";
}
