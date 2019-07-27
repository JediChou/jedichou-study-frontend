(function(window){

    window.angular.module('app', []);

    window.angular.module('app').controller('InitTitle', ['$scope', function($scope){
        $scope.title = 'Demo 0209';
    }]);

    window.angular.module('app').controller('OutPutController', ['$scope', function($scope){
        $scope.collections = [
            {name: 'sarah'},
            {name: 'miki'},
            {name: 'dora'},
            {name: 'latin'},
            {name: 'latin'},
            {name: 'latin'},
            {name: 'latin'},
            {name: 'latin'},
            {name: 'latin'},
            {name: 'latin'},
            {name: 'latin'},
        ];

        $scope.computer = function() {
            return $scope.collections.length;
        };

    }]);

})(window);