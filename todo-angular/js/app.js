(function (window) {

    // 註冊一個應用程序的主模塊
    // module方法如果只傳入一個參數就不是創建一個新的模塊，而是獲取一個已有的模塊
    window.angular.module('TodoApp', []);

    // 為主模塊註冊控制器
    // module('TodoApp') -> 獲取一個已有的模塊
    window.angular.module('TodoApp')
        .controller('MainController', ['$scope', '$http', function($scope, $http){
            // $scope的作用：向視圖中暴露數據的
            // 文本框當中的值
            $scope.text = '';  // 會和文本框做雙向綁定

            // 任務列表, 數據寫死了，可能你來源於數據庫(AJAX)
            // 也有可能是經過業務邏輯後結果
            $scope.todoList = [
                {text:'學習AngularJS基礎', done:false},
                {text:'學習React基礎', done:false}
            ];

            $scope.add = function() {
                var text = $scope.text.trim();
                // 判斷是否為空
                if (text) {
                    $scope.todoList.push({text: text, done: false});
                }
                $scope.text = '';
            }

            // 刪除行為
            $scope.delete = function(todo) {
                var index = $scope.todoList.indexOf(todo);
                $scope.todoList.splice(index, 1);  // 必須這樣刪除
            }

            // 獲取已完成的個數（是作為屬性，還是方法！要看數據是否為動態的數據！）
            // 如果數據會變
            $scope.doneCount = function() {
                var temp = $scope.todoList.filter(function(item){
                    return item.done; // 返回true表示當前item滿足條件
                });
                return temp.length;
            };

        }]);

})(window);

// 坑: 不要把window寫成windows
// 坑: 使用filter進行todoList數組的遍歷