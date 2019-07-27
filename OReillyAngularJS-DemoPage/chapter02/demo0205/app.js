(function (window){

    // create app module
    window.angular.module('app', []);

    // create InitTitle controller
    window.angular.module('app').controller('InitTitle', ['$scope', function($scope){
        $scope.page = {
            title: 'Demo 0204'
        };
    }]);

    // create HeaderController controller
    window.angular.module('app').controller('HeaderController', ['$scope', function($scope){
        $scope.isError = false;
        $scope.isWarning = false;
        $scope.message = "提示信息";

        $scope.isDefault = true;

        $scope.showError = function() {
            $scope.message = "Error: 错误提示信息";
            $scope.isError = true;
            $scope.isWarning = false;
            $scope.isDefault = false;
        };

        $scope.showWarning = function() {
            $scope.message = "Warning: 警告信息";
            $scope.isError = false;
            $scope.isWarning = true;
            $scope.isDefault = false;
        };

    }]);

})(window);