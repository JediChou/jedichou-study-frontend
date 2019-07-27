<?php
// File name: Demo020302_2.php
// Description: 相对较好的例子

// 手动传参数
$_POST['FirstName'] = "Jedi Chou";
?>

<html>
    <head>
        <title>不好的混编PHP和HTML的例子</title>
    </head>
    <body>
        <table style="font-family: Arial,sans-serif;font-size: 80%; width: 100%;">
            <tr>
                <td style="width:50%">
                    First Name:
                </td>
                <td style="width: auto">
                    <?=$_POST['FirstName'] ?>
                </td>
            </tr>
        </table>
    </body>
</html>