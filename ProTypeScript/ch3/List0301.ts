// File: List0301.ts
// Ref: Apress Pro TypeScript
// Listing 3-1. Open recursion

interface FileItem {
    path: string;
    contents: string[];
}

class FileReader {
    getFiles(path: string, depth: number = 0) {
        var fileTree = [];
        var files = fs.readdirSync(path);
        for (var i = 0; i<files.length; i++) {
            
        }
        return fileTree;
    }
}
