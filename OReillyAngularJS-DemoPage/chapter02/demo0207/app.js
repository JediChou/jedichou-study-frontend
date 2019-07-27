(function(window){

    // step 1. define images object array
    var path = 'img/'
    var images = [
        { path: path, name: 'jedi1.jpg'},
        { path: path, name: 'jedi2.jpg'},
        { path: path, name: 'jedi3.jpg'},
        { path: path, name: 'sith1.jpg'},
        { path: path, name: 'sith2.jpg'},
        { path: path, name: 'sith3.jpg'}
    ];

    // step 2. create ng-app module
    window.angular.module('app', []);

    // step 3. create InitTitle controller
    window.angular.module('app').controller('InitTitle', ['$scope', function($scope){
        $scope.page = {title: 'Demo 0207'};
    }]);

    // step 4. create displayImgController controller
    window.angular.module('app').controller('displayImgController', ['$scope', function($scope){

        // use images object array
        $scope.images = images;

        // when selected item
        $scope.selectFood = function(index) {
            $scope.selectedRow = index;
        };

    }]);

})(window);