(function (window) {

    window.angular.module('app', []);

    window.angular.module('app').controller('HelloContainer', ['$scope', function($scope){
        $scope.greeting = {
            text: 'Jedi Chou'
        }
    }]);

})(window);