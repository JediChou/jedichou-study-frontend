// 构造一个测试用的对象
function TestPage(url, desc) {
    this.url = url || '/index.html';
    this.desc = desc || 'no desc';
};

// TestPage工厂方法
function TestFactory(url, desc) {
    return new TestPage(url, desc);
}