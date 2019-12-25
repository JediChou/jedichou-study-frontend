<?php

final class AccessControl {}
class MyAccessControl extends AccessControl {}

/*******************************************************************************
 * You will get a error message.
 * Fatal error: Class MyAccessControl may not inherit from final class 
 * (AccessControl) in D:\xampp-1.8.2\htdocs\phpinaction\ch03\PIA030107.php
 *  on line 4
 *******************************************************************************
 * Jedi: You know, you can not extend a final class.
 */