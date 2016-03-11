/**
 * Created by wenjie on 3/6/16.
 */
(function () {
    angular.module('app').directive('stuTable', function (view) {
        return {
            restrict: 'AE',

            templateUrl: view.getgetTableTemplate(),


            scope: {
                students: '=',
                filterText: '@',
                editStudent: '=',
                abc:'&'
            },

            link: function (scope, element, attrs) {

                //scope.$on();
                //scope.$broadcast();

                scope.$watch('filterText', function (newValue) {
                    scope.searchText = {value: newValue}
                });

                scope.removeStudent = function (student) {
                    var index = scope.students.indexOf(student);
                    if (index != -1) {
                        scope.students.splice(index, 1);
                    }
                };
            }

        }
    })
}());
