<?php

/*
 * 演示一個PHP5的重載
 */

abstract class OverloadableObject {

    function __call($name, $args) {
        $method = $name . "_" . count($args);
        if (!method_exists($this, $method)) {
            throw new Exception("Call to undefined method " .
                    get_class($this) . "::$method");
        }
        return call_user_func_array(arrary($this, $method), $args);
    }

}

class Multiplier extends OverloadableObject {

    function multiply_2($one, $two) {
        return $one * $two;
    }

    function multiply_3($one, $two, $three) {
        return $one * $two * $three;
    }

}

$multi = new Multiplier();
echo "<p>" . $multi->multiply_2(1, 2) . "</p>";
echo "<p>" . $multi->multiply_3(1, 2, 3) . "</p>";
?>
