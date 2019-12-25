<?php
// File name: Demo020402_2.php
// Description: 数字变量的格式化
?>

<html>
    <head>
        <title>数字变量的格式化</title>
    </head>
    <body>
        <?php
            $prices = 12345.67;
            echo number_format($prices) . "<br/>";
            echo number_format($prices, 2, '.', '') . "<br/>";
        ?>
    </body>
</html>