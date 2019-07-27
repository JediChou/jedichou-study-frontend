<?php

/*
 * @abstract 提供一个使用类库（用于测试namespace）
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-8, Jedi Zhou
 */

namespace name2;

class Jedi {
    public $version = "20140408";
    public $author = "Jedi Zhou";
    
    public function getDate() {
        return date("yyyy-mm-dd");
    }
}
