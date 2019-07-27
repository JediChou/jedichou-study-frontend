(function (window){

    // create a ng-app
    window.angular.module('app', []);
    window.angular.module('app').controller('CartController', ['$scope', function($scope){

        // 初始化数据
        $scope.items = [{
                title: 'Paint pots',
                quantity: 8,
                price: 3.95
            }, {
                title: 'Polka dots',
                quantity: 17,
                price: 12.95
            },{
                title: 'Pebbles',
                quantity: 5,
                price: 6.95
            },{
                title: 'Apple',
                quantity: 30,
                price: 5.50
        }];

        // 删除已有的货品
        $scope.remove = function(index) {
            $scope.items.splice(index, 1);
        }
    }]);

})(window);