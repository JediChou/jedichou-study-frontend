<?php
// TODO: 需要建表後才能做相應的測試

$r = mysql_query("SELECT message FROM messages WHERE id = 1") or die();
$ob = mysql_fetch_object($r);
$tabbed = str_replace(' ', '\t', $ob->message);
$spaced = str_replace('\t', ' ', $ob->message);

print "With Tabs: <pre>$tabbed</pre>";
print "With Spaces: <pre>$spaced</pre>";