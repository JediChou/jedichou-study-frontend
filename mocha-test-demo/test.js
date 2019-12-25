var assert = require('assert');
var operator = require('./operations.js');

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

describe('测试Operations', function(){
  describe('add方法', function(){
    
    var op = new operator();

    it ('整数相加', function(){
      assert.equal(5, op.add(2, 3));
      assert.equal(5, op.add(3, 2));
    });

    it('字符串相加', function(){
      assert.equal('jedichou', op.add('jedi', 'chou'));
      assert.equal('jedichou', op.add('jedic', 'hou'));
    });

  });
});
