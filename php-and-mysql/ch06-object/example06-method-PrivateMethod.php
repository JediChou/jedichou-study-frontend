<?php

/**
 * @abstract private method demo 
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-4, Jedi Zhou
 */
header("Content-type: text/html; charset = utf-8");

class Card {

    private $CardID="";
    private $Effective = FALSE;

    public function __construct($CardID) {
        $this->CardID = $CardID;
        $this->Effective = $this->checkEffective($this->CardID);
    }

    private function checkEffective($CardId) {
        // 如果不符合格式就返回FALSE
        // 其他情况一律返回TRUE
        // 实例是无法这样调用的，$MyCard->checkEffective()
        if (!ereg('^([0-9]{4})-([0-9]{3})-([0-9]{2})', $CardId)) {
            return FALSE;
        } else {
            return TRUE;
        }
    }

    public function getEffective() {
        return $this->Effective;
    }
    
    public function getCardID() {
        return $this->CardID;
    }

}

// 定义一堆卡
$MyCards[] = new Card("8888-888-F8");
$MyCards[] = new Card("111-222-338");
$MyCards[] = new Card("8888-888-08");
$MyCards[] = new Card("8888-111-F8");
$MyCards[] = new Card("8888-222-38");
$MyCards[] = new Card("3344-888-F8");
$MyCards[] = new Card("822-3-8");

// 输出有效性
foreach ($MyCards as $Card) {
    if(! $Card->getEffective()) {
        echo "卡号：" . $Card->getCardID() . ", 无效<br/>";
    } else {
        echo "卡号：" . $Card->getCardID() . ", <b>有效</b><br/>";
    }
}
