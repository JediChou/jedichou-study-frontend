<?php

/**
 * Compare custome sort function with sort and usort function.
 * Total reference [Beginning PHP and MySQL, 3th chinese edition].
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com> or <jedi.h.zhou@mail.foxconn.com>
 * @copyright (c) 2014-4-2, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

// Define a array object
$dates = array(
    '10-10-2003', '2-17-2002', '2-16-2003',
    '1-01-2005', '10-10-2004'
);

// Use sort method, and display result.
echo "<p><b>Sorting the array using the sort() function:></b></p>";
sort($dates);
print_r($dates);

// Use nasort method, and display result.
echo "<p><b>Sorting the array using the natsort() function:</b></p>";
natsort($dates);
print_r($dates);

// Define a custome sort function
function DateSort($a, $b) {
    // If he dates are equal, do nothing.
    if ($a == $b) {
        return 0;
    }

    // Disassemble dates
    list($amonth, $aday, $ayear) = explode("-", $a);
    list($bmonth, $bday, $byear) = explode("-", $b);

    // Pad the month with a leading zero if leading number not present
    $amonth = str_pad($amonth, 2, "0", STR_PAD_LEFT);
    $bmonth = str_pad($bmonth, 2, "0", STR_PAD_LEFT);

    // Pad the day with a leading zero if leading number not present
    $aday = str_pad($aday, 2, "0", STR_PAD_LEFT);
    $bday = str_pad($bday, 2, "0", STR_PAD_LEFT);

    // Reassemble dates
    $a = $ayear . $amonth . $aday;
    $b = $byear . $bmonth . $bday;

    // Determine whether date $a > $date b
    return ($a > $b) ? 1 : -1;
}

// Use user define function to sort, and display result.
echo "<p><b>Sorting the array using the user-defined DataSort() function:</b></p>";
usort($dates, "DateSort");
print_r($dates);
