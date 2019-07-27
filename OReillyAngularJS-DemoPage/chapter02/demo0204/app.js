
(function (window){

    var page =  { title: 'Demo0204 - 隐藏和显示' };

    window.angular.module('app', []);

    window.angular.module('app').controller('InitTitle', ['$scope', function($scope){
        $scope.page = page;
    }])

    window.angular.module('app').controller('DeathrayMenuController', ['$scope', function($scope){
        $scope.menuState = {'show': false};
        $scope.toggleMenu = function() {
            $scope.menuState.show = !$scope.menuState.show;
        };
        $scope.stun = function() {
            $scope.isDisabled = 'true';
        };
    }]);

})(window);
