(function(window){
    window.angular.module("app", []);
    window.angular.module("app").controller('HelloController', ['$scope', function($scope){
        // 依賴注入
        $scope.greeting = { text: '数据绑定' };
    }]);
})(window);