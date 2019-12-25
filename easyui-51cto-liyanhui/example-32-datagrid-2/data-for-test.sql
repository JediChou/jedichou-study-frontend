--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(5) NOT NULL,
  `user` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `date` date NOT NULL
);

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `user`, `email`, `date`) VALUES
(1, '蜡笔小新', 'xiaoxin@qq.com', '2014-04-01'),
(2, '樱桃小丸子', 'xiaowanzi@qq.com', '2014-04-01'),
(3, '路飞', 'lufei@qq.com', '2014-04-01'),
(4, '黑崎一护', 'yihu@qq.com', '2014-04-02'),
(40, '李炎恢', 'bnbbs@163.com.com', '2014-07-03'),
(41, '娜美', 'namei@163.com', '2014-08-23'),
(42, '叮当', 'dingdang@163.com', '2014-08-23'),
(43, '大熊', 'daxiong@163.com', '2014-08-25'),
(44, '花仙子', 'huaxianzi@163.com', '2014-08-26'),
(45, '漩涡鸣人', 'mingren@163.com', '2014-08-27'),
(46, '佐助', 'zuozhu@163.com', '2014-08-28'),
(47, '卡卡西', 'kakaxi@163.com', '2014-08-30');