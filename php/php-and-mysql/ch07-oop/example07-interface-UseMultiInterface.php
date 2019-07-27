<?php

/*
 * 实现多个接口
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */

header("Content-type: text/html; charset = utf-8");

interface Bank {
    function Bank_Save_Money($money);
    function Bank_Get_Money($money);
}

interface WeChat_Pay {
    function WeChat_Save_Money($money);
    function WeChat_Pay_Money($money);
}

class PayOperation implements Bank, WeChat_Pay {

    private $balance;
    
    // setter and getter for balance
    public function setBalance($number) { $this->balance = $number; }
    public function getBalance() { return $this->balance; }

    // implement Bank_Save_Money and Bank_Get_Money
    public function Bank_Get_Money($money) {
        $this->setBalance($this->getBalance() - $money);
    }
    public function Bank_Save_Money($money) {
        $this->setBalance($this->getBalance() + $money);
    }
    
    // implement WeChat_Save_Money and WeChat_Pay_Money
    public function WeChat_Save_Money($money) {
        $this->setBalance($this->getBalance() + $money);
    }
    public function WeChat_Pay_Money($money) {
        $this->setBalance($this->getBalance() - $money);
    }
    
}

// create a instance
$paynode = new PayOperation();
$paynode->setBalance(1000);

// process Bank operator
$paynode->Bank_Save_Money(2000); echo $paynode->getBalance() . "<br/>";
$paynode->Bank_Get_Money(200); echo $paynode->getBalance() . "<br/>";

// process WeChat operator
$paynode->WeChat_Save_Money(1000); echo $paynode->getBalance() . "<br/>";
$paynode->WeChat_Pay_Money(125); echo $paynode->getBalance() . "<br/>";
