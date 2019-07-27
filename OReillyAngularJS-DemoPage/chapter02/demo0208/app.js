(function(window){

    window.angular.module('app', []);

    window.angular.module('app').controller('initTitle', ['$scope', function($scope){
        $scope.page = { title: 'Demo 0208' };
    }]);


    window.angular.module('app').controller('displayLinkList', ['$scope', function($scope){

        // link sources
        $scope.links = [
            {id: 1, name: 'google', address: 'www.google.com'},
            {id: 2, name: 'baidu', address: 'www.baidu.com'},
            {id: 3, name: 'yahoo', address: 'www.yahoo.com'},
            {id: 4, name: 'yahoo', address: 'www.yahoo.com'},
            {id: 5, name: 'yahoo', address: 'www.yahoo.com'},
            {id: 6, name: 'yahoo', address: 'www.yahoo.com'}
        ];

        // when selected item
        $scope.selectLink = function(index) {
            $scope.selectedRow = index;
        };

    }]);
})(window);