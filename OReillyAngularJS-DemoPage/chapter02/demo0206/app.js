(function(window){

    // create a module
    window.angular.module('app', []);

    // create InitTitle controller
    window.angular.module('app').controller('InitTitle', ['$scope', function($scope){
        $scope.page = {title: 'Demo0206'};
    }]);

    // create FillFoodController controller
    window.angular.module('app').controller('FillFoodController', ['$scope', function($scope){
        $scope.menu = [
            {name: 'The Handsome Heifer', shortname: 'BBQ'},
            {name: 'Green\'s Green Greens', shortname: 'Salads'},
            {name: 'House of Fine Fish', shortname:'Seafood'},
            {name: 'House of Fine Fish', shortname:'Seafood'},
            {name: 'House of Fine Fish', shortname:'Seafood'}
        ];

        // when select item
        $scope.selectFood = function(index) {
            $scope.selectedRow = index;
        };
    }]);

})(window);