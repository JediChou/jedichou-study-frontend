<?php

//if(strpos($_POST['email'], '@') === false ) {
//    print '<h1>There was no @ in the e-mail address!</h1>';
//}

$email_1 = "skyzhx@163.com";
if(strpos($email_1, '@') == true) {
    print "<h1>This is a email address</h1>";
}
