<?php
// File name: Demo020501_1.php
// Description: 通过链接在页面间传递变量
?>

<html>
    <head>
        <title>通过链接在页面间传递变量-接收变量的页面</title>
    </head>
    <body>
        <?php
            echo '我的爱好是: ';
            echo $_GET['movie'];
            echo '<br/>';

            $moviesRate = 5;
            echo '我对这部电影的评价是';
            echo $moviesRate;
            echo '<br/>'
        ?>
    </body>
</html>