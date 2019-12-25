<?php

/*
 * 雖然出錯, 但日誌還是記錄下來了.
 */

require_once 'Log.php';

class LoggingClass {

    function __call($method, $args) {
        $method = "_$method";
        if (!method_exists($this, $method))
            throw new Exception("Call to undefined method "
                    . get_class($this) . "::$method");
        $log = Log::singleton('file', './user.log', 'Methods', NULL, LOG_INFO);
        $log->log("Just starting method $method");
        $return = call_user_func_array(array($this, $method), $args);
        $log->log("Just finished method $method");
        return $return;
    }

}

class DateAndTime extends LoggingClass {

    private $timestamp;

    function __construct($timestamp=FALSE) {
        $this->init($timestamp);
    }

    protected function _init($timestamp) {
        $this->timestamp = $timestamp ? $timestamp : time();
    }

    function getTimestamp() {
        return $this->timestamp;
    }

    protected function _before(DateAndTime $other) {
        return $this->timestamp < $other->getTimestamp();
    }

}

$now = new DateAndTime;
$nexthour = new DateAndTime(time() + 3600);
print_r(array($now, $nexthour));

if ($now->before($nexthour)) {
    echo "OK\n";
}
?>
