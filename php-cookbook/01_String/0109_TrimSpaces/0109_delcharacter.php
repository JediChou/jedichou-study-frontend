<?php

// 从一行的开始处删除数值和空格
print ltrim('10 PRINT A$', ' 0..9') . "<br/>";

// 从一行的结尾处删除分号
print rtrim('SELECT * FROM users;', ';');
