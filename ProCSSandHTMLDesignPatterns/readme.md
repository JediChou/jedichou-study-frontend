精通CSS与HTML设计模式
===================
English Name: Pro CSS and HTML Design Patterns
Author: Michael Bowers (US)
Translate: 刘申, 朱瑜敏, 鲁奇 (China)
ISBN 978-7-115-18553-2
Study: Jedi Chou

# 前言
* 适用读者-“340多种设计模式”。Jedi: 有这么多吗？
* 6种盒子模型 Jedi: 好吧，这真是一个复杂的东西！
  - 内联, 内联块状, 块状, 表格, 绝对, 浮动
* 盒模型的范围-尺寸, 包裹, 拉伸。Jedi: 是CSS的核心？
* 盒模型的定位-缩进, 偏移, 对齐
* 列布局
* 流动布局
* 约定
  - 大写的标记都应当替换成实际的值
  - 大写的元素标记应带被替换成你所选的元素
    - ELEMENT代表任何一种元素
    - INLINE代表内联元素
    - INLINE_TEXT代表包含文本的内联元素
    - BLOCK代表块状元素
    - TERMINAL_BLOCK代表终端块状元素
    - INLINE_BLOCK代表内联块状态元素
    - HEADDING代表h1-h6
    - PARENT代表任何可作为有效父元素的元素
    - CHILD代表任何可作为有效子元素的元素
    - LIST代表任意一种列表元素，包括ol,ul,dl
    - LIST_ITEM代表任意一种列表项元素，包括li,dd和dt
  - 大写的选择符（selector）都应当被替换
    - SELECTOR {}, 代表所有选择符
    - INLINE_SELECTOR {}, 代表用于选择内联元素的选择符
    - 
  - 大写标记的值都应当被替换
* 约定举例
```mark
HTML
  <BLOCK class="handing-indent">
    <INLINE class="handing-dropcap"> text </INLINE>
  </BLOCK>
CSS
*.handing-indent {padding-left:+VALUE; text-indent:-VALUE; margin-top:VALUE; }
*.handing-dropcap { position: relative; top:VALUE; left:VALUE; font-size:SIZE;
line-height:+SIZE; }
```
* Jedi Memo: 疯狂的CSS

# Ch1 设计模式：轻松搞定CSS!
* 350余种简单的设计模式
* 12种快速解决CSS难题的方案

## 1.1 设计模式-精心组织的解决方案
* Design Patterns: Elements of Reusable Object-Oriented Software
* 模式: 名字, 要解决的问题, 解决方案, 各方面的权衡

## 1.2 使用设计模式
* 1-16章包含了300多种设计模式
* 都是通过45种常见的CSS属性与4种元素和5种定位方式结合而创建的
  - 4种元素：内联, 内联块状态, 块状, 表格
  - 5种定位方式：静态, 相对, 绝对, 固定, 浮动
* 例子1-1
```h5-pattern
HTML
<h1>背景图片</h1>
<div></div>
CSS
div {background:url("heading2.jpg") no-repeat;width:250px; height:76px;}
``` 

* 例子1-2
```h5-pattern
NAME: 绝对定位设计模式
DESCRIPTION: 让一个元素脱离原来代码中的排序，而让它相对另一个元素重新定位
HTML
<h1>絕對定位
<div class="positioned">
  <span class="absolute">設定尺寸的絕對定位元素</span>
<div>
CSS
*.positioned { posititon: relative; }
*.absolute { position: absolute; top: 10px; left: 10px;}
```

* 例子1-3
```h5-pattern
NAME: 一個文本替換（Text Replacement）設計模式
HTML
<h1>文本替換</h1>
  <h2 id="h2">標題2<span></span></h2>
CSS
#h2 { position: relative; width: 205px; height: 76px; overflow: hidden; }
#h2 span { position: absolute; width: 250px; height: 76px; left 0; top:0; background: url("heading2.jpg") norepeat;}
```

* 例子1-4
```h5-pattern
NAME: 
DESCRIPTION:
HTML
<h1>绝对定位</h1>
<div class="positioned">
  <span class="absolute">设定尺寸的绝对定位元素</span>
</div>
CSS
```