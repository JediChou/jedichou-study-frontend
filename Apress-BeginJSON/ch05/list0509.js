// Ref: Apress Beginning JSON
// Listing 5-9.
//  Attaching the JSON Function to the Object will
//  cause all javascript objects to process it
// Jedi Chou, 2016.6.16


Object.prototype.toJSON = function(key) {
    console.log(key);
    console.log(this);
    return this;
}

function stringify(structure) {
    
    // 如果是字符串类型则直接进行转义
    if (typeof structure=="string") {
        return '"' + String(structure) + '"';
    }
    
    // 如果是对象类型则进行下列处理
    if (typeof structure == "object") {
        var partial = [];
        
        // 分别将属性进行转换
        for (var k in structure) {
            var v = structure[k];
            v = stringify(v);
            partial.push(k + " : " +v);
        }
        
        // if partial does not process children capture opening/closing brackets;
        v = (partial.length === 0)? '{}'
        // otherwise, comma delimit all values within opening/closing brackets
        : ' { ' + partial.join(' , ') + ' } '
        return v;
    }
}

var author = new Object();
    author.name = "Ben";
    author.age = 36;
    author.pets = [
        { name: "BigWan", age: 3.5 },
        { name: "LessLi", age: 4}
    ];
    
console.log(stringify(author));