(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = '';
        $scope.message = '';

        $scope.checkLunch = function() {
            var items = $scope.lunchItems.split(',').filter(function(item) {
                return item.trim() !== '';
            });

            if ($scope.lunchItems.trim() === '') {
                $scope.message = 'Please enter data first';
                document.querySelector('input').style.borderColor = 'red';
                document.querySelector('p').style.color = 'red';
            } else if (items.length <= 3) {
                $scope.message = 'Enjoy!';
                document.querySelector('input').style.borderColor = 'green';
                document.querySelector('p').style.color = 'green';
            } else {
                $scope.message = 'Too much!';
                document.querySelector('input').style.borderColor = 'green';
                document.querySelector('p').style.color = 'green';
            }
        };
    }
})();
