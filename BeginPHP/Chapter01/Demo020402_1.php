<?php
// File name: Demo020402_1.php
// Description: 使用变量
?>

<html>
    <head>
        <title>使用变量</title>
    </head>
    <body>
        <?php
            Define('DATABASE', 'localhost');
            echo '<h1>'. DATABASE . '</h1>';
            $movieNumbers = 5;
            $movieNumbers = 6;
            echo "这一行将输出一个变量" . $movieNumbers . "<br/>";
        ?>
    </body>
</html>