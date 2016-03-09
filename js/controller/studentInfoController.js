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

    angular.module('app').controller('studentInfoController', ['$scope','view', '$http', function ($scope,view,$http) {

        $scope.init = function () {
            $scope.students = [
                new student(1, 'Jack hu', 'A', 'new york city'),
                new student(2, 'mike xu', 'A', 'london'),
                new student(3, 'Jack wu', 'B', 'new york city'),
                new student(4, 'mike sui', 'A', 'london'),
                new student(5, 'mia he', 'A', 'San Francisco'),
                new student(6, 'John hu', 'B', 'San Francisco')
            ];

            $scope.student = {selected: new student()};
            $scope.viewUrl = 'templates/searchStudent.html';

            $scope.searchContent = '';
            $scope.searchText = {value: ''};

            $scope.$broadcast('hello',{arg:'aa'});
        };

        $scope.toDataBase =function(){
            var url='database/save';
            var postData = $scope.students;
          $http.post(url,postData).then(function(){},function(){});
        };

        $scope.$on('hello',function(event,args){});

        $scope.edit = function (student) {
            $scope.student.selected = student;
        };

        $scope.remove = function (student) {
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
            $scope.viewUrl = view.getView1();
        };

        $scope.view2 = function () {
            $scope.viewUrl = view.getView2();
        };

        $scope.view3 = function(){
            $scope.viewUrl = "templates/studentsList.html";
        }

    }]);
}());
