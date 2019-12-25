var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});


describe('简单的断言示例', function(){
  describe('变量', function() {
    
    it('整数变量', function(){
      var a = 1;
      assert.equal(a, 1);      
    });

    it('字符串变量', function(){
      var str1 = "jedichou";
      assert.equal(str1, "jedichou");
    });
    
  });
});