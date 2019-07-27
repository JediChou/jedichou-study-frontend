// File: List0301.ts
// Ref: Apress Pro TypeScript
// Listing 3-1. Open recursion
var FileReader = (function () {
    function FileReader() {
    }
    FileReader.prototype.getFiles = function (path, depth) {
        if (depth === void 0) { depth = 0; }
        var fileTree = [];
        var files = fs.readdirSync(path);
        for (var i = 0; i < files.length; i++) {
        }
        return fileTree;
    };
    return FileReader;
}());
