<?php
// File name: Demo020501_3.php
// Description: 通过链接在页面间传递变量(带编码)
?>

<html>
    <head>
        <title>通过链接在页面间传递变量-传递变量的页面，带编码</title>
    </head>
    <body>
        <!-- 用PHP生成链接 -->
        <?php
            $movie = urlencode("我看你还闹不闹");
            echo "<a href='Demo020501_1.php?movie=" . $movie . "'>";
            echo "点击验证1";
            echo "</a>";
        ?>
    </body>
</html>