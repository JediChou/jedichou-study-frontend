<?php

/*
 * @abstract 抓取多个异常（不过这段代码有点问题）
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-9, Jedi Zhou
 */

header("Content-type: text/html; charset=utf-8");

class Invalid_Email_Exception extends Exception {

    function __construct($message, $email) {
        $this->message = $message;
        $this->email = $email;
    }

    private function notifyAdmin($email) {
        mail("admin@example.com", "INVALID EMAIL", $email, "FROM:web@example.com");
    }

}

// 原代码比较晦涩
class Subscribe {

    function validateEmail($email) {
        try {
            if ($email == "") {
                throw new Exception("You must enter an e-mail address");
            } else {
                list($user, $domain) = explode("@", $email);
                if (!checkdnsrr($domain, "MX")) {
                    throw new Invalid_Email_Exception("Invalid e-mail address!", $email);
                } else {
                    return 1;
                }
            }
        } catch (Exception $ex) {
            echo $ex->getMessage();
        } catch (Invalid_Email_Exception $ex) {
            echo $ex->getMessage();
        }
    }

    /**
     * This method would presumably add the user's e-mail address
     * to a database.
     */
    function subscribeUser() {
        echo $this->email . " added to the database!";
    }

}

