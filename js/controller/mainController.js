(function () {
    /**
     * Created by wenjie on 1/26/16.
     */
    angular.module('app').controller('mainController', ['$scope', '$window', function ($scope, $window) {
        $scope.init = function () {
            $scope.buttons = [
                {id: 'name', description: 'Name', value: '', type: 'text'},
                {id: 'email', description: 'Email', value: '', type: 'email'},
                {id: 'address', description: 'home address', value: '', type: 'text'},
                {id: 'password', description: 'Password', value: '', type: 'password'}
            ];

            $scope.button = {selected: $scope.buttons[0]};

            $scope.inputValue = '';
        };

        $scope.chooseButton = function (button) {
            $scope.button.selected = button;
        };

        $scope.alert = function () {
            $window.alert($scope.inputValue);
        }
    }]);
}());
