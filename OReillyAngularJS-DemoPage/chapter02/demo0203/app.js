(function (window){

    // default data set
    var students = [
        { id:1, name: 'Sara'},
        { id:2, name: 'Miki'},
        { id:3, name: 'Yoyo'}
    ];

    // page title
    var page = {
        title: 'Demo0203-数据绑定'
    };

    // create a ng-app
    window.angular.module('app', []);

    // create a controller for page title
    window.angular.module('app').controller('InitTitle', ['$scope', function($scope){
        $scope.page = page;
    }]);

    // create a controller for
    window.angular.module('app').controller('displayStudent', ['$scope', function($scope){
        $scope.students = students;

        // binding
        $scope.addNew = function() {
            var id = $scope.students.length + 1;
            var name = 'Miss lady';
            var tempObj = {id: id, name: name};
            $scope.students.splice(1, 0, tempObj);
        };
    }]);

})(window);