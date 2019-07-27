ray-date-package test
=====================

处理测试用例时有用到以下两个正则表达式。
```javascript
查找: expect:"(\w+)\.(\w+).(\w+)
替换: expect:"[\1]/[\2]/[\3]
查找: expect:"(\w+)\/(\w)\/(\w+)
替换: expect:"\1\/0\2\/\3)
```