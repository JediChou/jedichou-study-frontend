<hr>
<h1>字符串连接</h1>
<?php
$username = 'Jedi Chou';
echo 'My name is $username <br/>'; // 不会解析
echo "My name is $username <br/>"; // 会得到解析
echo "我的名字是$username<br/>";
echo "我的名字是" . $username . "<br/>";

?>

<hr>
<h1>操作符</h1>
<?php
$a = 1; $b=10; $c=$a + $b;
echo "Result is $c";
?>

<hr>
<h1>一元运算符</h1>
<?php
$a = 1; $b = 10; $a+=$b;
echo "Result is $a";
?>

<hr>
<h1>++运算符</h1>
<?php
$a = $b++;
echo "Result is $a";
?>

<hr>
<h1>比较运算符</h1>
<?php
$a = 5; $b = 6; $c = $a != $b;
echo "Result is $c " . "<br/>";
?>

<hr>
<h1>===运算符</h1>
<?php
$a = 5; $b = 5; $c = ($a === $b);
echo "Result is: " . $c. "<br/>";
?>

<hr>
<h1>三元运算符</h1>
<?php
echo (2 > 1) ? "Result is: 成功" : "Result is: 失败" . "<br/>";
?>

<hr>
<h1>@操作符</h1>
<?php
// 在开发过程中都要暴露出来
$temp = @(10/0);
echo "Result is : " . $temp . "<br/>";
?>

