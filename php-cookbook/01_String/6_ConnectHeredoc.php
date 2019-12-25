<?php

$divClass = "class1";
$ulClass = "class2";
$listItem = "The List Item";

$html = <<< END
<div class = "$divClass">
<ul class = "$ulClass">
<li>
END
. $listItem . '</li></div>';

print $html;