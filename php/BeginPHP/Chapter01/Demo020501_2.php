<?php
// File name: Demo020501_2.php
// Description: 通过链接在页面间传递变量
?>

<html>
    <head>
        <title>通过链接在页面间传递变量-传递变量的页面</title>
    </head>
    <body>
        <!-- 用PHP生成链接 -->
        <?php
            echo "<a href='Demo020501_1.php?movie=平地一声吼'>";
            echo "点击验证1";
            echo "</a>";
        ?>

        <!-- 这里则是一个传统的例子 -->
        <a href="Demo020501_1.php?movie=哎哟妈妈">点击验证2</a>
    </body>
</html>