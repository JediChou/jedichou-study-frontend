<?php

class Circle {
    public $diameter;
}

// 可以把变量、对象的属性及数组元素直接放在双引号字符串中
$children = 3;
print "I have $children children<br/>";

$amounts['payment'] = 20;
print "You own $amounts[payment] immediately<br/>";

$circle = new Circle();
$circle->diameter = 63;
print "My circle's diameter is {$circle->diameter} inches";