var age = 29;
function sayAge() {
    return this.age;
}

test('Ch080101 - 全局作用域', function() {
    equals(window.age, 29);
    equals(sayAge(), 29);
    equals(window.sayAge(), 29);
})
