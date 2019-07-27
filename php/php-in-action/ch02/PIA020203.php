<?php

/**
 * PHP In Action
 * @author Jedi Chou
 */
class ConfigurationException extends Exception {
    const SQL_SYNTAX_ERROR = 1;
    const DB_CONNECTION_ERROR = 2;
}

try {
    throw new ConfigurationException("Connection is disable", 2);
} catch (Exception $e) {
    switch ($e->getCode()) {
        case ConfigurationException::SQL_SYNTAX_ERROR:
            echo ConfigurationException::SQL_SYNTAX_ERROR . " - SQL error\n";
            break;
        case ConfigurationException::DB_CONNECTION_ERROR:
            echo ConfigurationException::SQL_SYNTAX_ERROR . " - Connected error\n";
            break;
        default:
            echo "The error can not fixed";
            break;
    }
}