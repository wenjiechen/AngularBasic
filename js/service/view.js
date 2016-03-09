(function () {

    /**
     * Created by wenjie on 2/1/16.
     */
    angular.module('app').service('view', function () {
        var view1 = 'templates/addStudent.html';
        var view2 = 'templates/searchStudent.html';

        return {
            getView1: function () {
                return view1;
            },
            getView2: function () {
                return view2;
            },
            getgetTableTemplate: function () {
                return 'templates/directive/stuTableTemp.html';
            }
        }

    });
}());