<?php

/**
 * 确认接口存在 
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

interface Employee_Interface{}
interface Manager_Interface{}

$interface_array = array("Employee_Interface", "Manager_Interface", "Jedi");
foreach($interface_array as $interface_name) {
    if(interface_exists($interface_name)){
        echo $interface_name . "接口存在<br/>";
    } else {
        echo $interface_name . "接口不存在<br/>";
    }
}
