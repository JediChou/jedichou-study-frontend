<?php

class User {
    
    private $_username;
    private $_password;
    
    function __construct($username, $password) {
        $this->_username = $username;
        $this->_password = $password;
    }
    
    static public function encryptPassword() {
        return "EncryptPassword methods";
    }
    
    static public function insert($info) {
        return "Insert methods - " . $info;
    }
    
    public function getEncryptPassword() {
        return "getEncryptPassword methods - " . self::encryptPassword();
    }
}

$myUser = new User('Jedi', 'password');
echo "<h1>". User::encryptPassword() ."</h1>";
echo "<h1>". User::insert("Infoq message") ."</h1>";
echo "<h1>". $myUser->getEncryptPassword() ."</h1>";