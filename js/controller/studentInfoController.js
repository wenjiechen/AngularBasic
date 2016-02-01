(function () {
    /**
     * Created by wenjie on 1/26/16.
     */

    function student(id, name, grade, address) {
        this.id = id || '';
        this.name = name || '';
        this.grade = grade || '';
        this.address = address || '';
    }

    angular.module('app').controller('studentInfoController', ['$scope', '$window', function ($scope, $window) {

        $scope.init = function () {
            $scope.students = [
                new student(001, 'Jack hu', 'A', 'new york city'),
                new student(002, 'mike xu', 'A', 'london'),
                new student(003, 'mia he', 'B', 'SF'),
                new student(004, 'John hu', 'B', 'SF')
            ];

            $scope.student = {selected: new student()};
            $scope.viewUrl = 'templates/searchStudent.html';

            $scope.searchContent = '';
            $scope.searchText = {value: ''};
        };

        $scope.edit = function (student) {
            $scope.student.selected = student;
        };

        $scope.delete = function (student) {
            var index = $scope.students.indexOf(student);
            if (index != -1) {
                $scope.students.splice(index, 1);
            }
        };

        $scope.addStudent = function () {
            var index = $scope.students.indexOf($scope.student.selected);
            if (index == -1) {
                $scope.students.push($scope.student.selected);
            }
            $scope.student.selected = new student();
        };

        $scope.view1 = function () {
            $scope.viewUrl = 'templates/addStudent.html';
        };

        $scope.view2 = function () {
            $scope.viewUrl = 'templates/searchStudent.html';
        }

    }]);
}());
