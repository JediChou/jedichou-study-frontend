<?php

class Person {
    static private $DBTABLE = 'Persons';
    static private $DBTYPE  = 'SQL Server';
    
    static public function getDBTable() {
        return self::$DBTABLE;
    }
    
    static public function getDBType() {
        return self::$DBTYPE;
    }
}

$testObj = new Person();
echo "<h1>". Person::getDBTable() ."</h1>";
echo "<h1>". Person::getDBType() ."</h1>";