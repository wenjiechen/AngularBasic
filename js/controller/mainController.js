/**
 * Created by wenjie on 1/26/16.
 */
app.controller('mainController', function ($scope) {
    $scope.init = function () {
        $scope.buttons = [
            {id: 'name', description: 'Name', value: '', type: 'text'},
            {id: 'email', description: 'Email', value: '', type: 'email'},
            {id: 'address', description: 'home address', value: '', type: 'text'},
            {id: 'password', description: 'Password', value: '', type: 'password'}
        ];

        $scope.button = {selected: $scope.buttons[0]};
    };

    $scope.chooseButton = function (button) {
        $scope.button.selected = button;
    }
});