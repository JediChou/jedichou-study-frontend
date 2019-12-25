<?php
// File name: Demo020302_1.php
// Description: 比较不好的混编方式

// 手动传参数
$_POST['FirstName'] = "Jedi Chou";
?>

<html>
    <head>
        <title>不好的混编PHP和HTML的例子</title>
    </head>
    <body>
    <?php
        echo '<table style="font-family:Arial, sans-serif;font-size:80%;';
        echo 'width:100%">';
        echo '<tr>';
        echo '<td style = "width:10%" >';
        echo 'First Name:';
        echo '</td>';
        echo '<td style = "width:10%" >';
        echo $_POST['FirstName'];
        echo '</td>';
        echo '</tr>';
        echo '</table>';
    ?>
    </body>
</html>