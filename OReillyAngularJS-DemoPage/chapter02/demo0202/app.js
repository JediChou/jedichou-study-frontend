(function (window){

    window.angular.module('app', []);
    window.angular.module('app').controller('StartUpController', ['$scope', function($scope){
        $scope.funding = {startingEstimate: 0};
        $scope.computeNeeded = function() {
            var temp = $scope.funding.startingEstimate * 10
            $scope.funding.needed = isNaN(temp) ? '无效字符串, 请输入数值' : temp;
        };
        $scope.requestFunding = function() {
            window.alert('抱歉，请先获得更多的客户资源');
        };
        $scope.reset = function() {
            $scope.funding.startingEstimate = 0;
        };
    }]);

    window.angular.module('app').controller('InitTitle', ['$scope', function($scope){
        $scope.title = {
            pageTitle: 'Demo0202-表单提交'
        };
    }]);

})(window);
