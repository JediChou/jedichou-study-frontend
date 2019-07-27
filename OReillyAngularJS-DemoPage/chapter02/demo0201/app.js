(function (window){

    window.angular.module('app', []);
    window.angular.module('app').controller('StartUpController', ['$scope', function($scope){
        computeNeeded = function() {
            var temp = $scope.funding.startingEstimate * 10
            $scope.funding.needed = isNaN(temp) ? '无效字符串, 请输入数值' : temp;
        };
        $scope.funding = {startingEstimate: 0};
        $scope.$watch('funding.startingEstimate', computeNeeded);  // 这种写法更为简明!
    }]);

})(window);
