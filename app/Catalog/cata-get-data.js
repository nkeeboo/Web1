var app = angular.module("angularApp", [])
app.controller("CoursesController", function($scope, $http) {
    $http({
        method: "GET",
        url: "/assets/data/courses/courses.json"
    }).then(function mySucces(respone) {
        $scope.courses = respone.data;
    }, function myError(respone) {
        $scope.dataError = respone.statusText
    })
})