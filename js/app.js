(function () {
    //IIFE
    var app = angular.module('app', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/studentInfo");

        $stateProvider.state('studentInfo',{
            url:'/studentInfo',
            templateUrl:'templates/studentInfo.html'
        }).state('welcome',{
            url:'/',
            templateUrl:'templates/welcome.html'
        })
    })
}());

