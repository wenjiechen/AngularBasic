/**
 * Created by wenjie on 3/6/16.
 */
(function () {
    angular.module('app').directive('stuList', function ($timeout,$http,$q) {
        return {
            restrict: 'AE',

            templateUrl: 'templates/directive/stuListTemp.html',

            link: function (scope, element, attrs) {
                scope.text = attrs.highLight;

                //add time out for render finish
                $timeout(function () {
                    element.find('tr').each(function (idx, ele) {
                        if (idx % 2 == 0) {
                            $(ele).addClass('striped');
                        }
                    })

                });
            }
        }
    })
}())
