<?php
// File name: Demo020402_2.php
// Description: 使用变量2
?>

<html>
    <head>
        <title>使用变量2</title>
    </head>
    <body>
        <?php
            $SarahMovies = 5;
            $XinMovies = 10;
            $YoyoMovies = 2;
            $AvgMovies = ($SarahMovies + $XinMovies + $YoyoMovies) / 3;
            echo '平均数是' . $AvgMovies . '<br/>';
        ?>
    </body>
</html>