(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = '';
        $scope.message = '';
        $scope.messageClass = '';

        $scope.checkLunch = function() {
          
            var items = $scope.lunchItems.split(',')
                .map(item => item.trim())
                .filter(item => item.length > 0);

            if ($scope.lunchItems.trim() === '') {
                $scope.message = 'Please enter data first';
                $scope.messageClass = 'alert-danger'; // Set class for error
            } else if (items.length <= 3) {
                $scope.message = 'Enjoy!';
                $scope.messageClass = 'alert-success'; // Set class for success
            } else {
                $scope.message = 'Too much!';
                $scope.messageClass = 'alert-success'; // Set class for success
            }
        };
    }
})();
