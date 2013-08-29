'use strict';

angular.module('j2App')
    .controller('PageCtrl', function ($scope, Page) {
        $scope.Page = Page;
        $scope.activeNav=false;
        $scope.toggleNav = function(){
        $scope.activeNav = !$scope.activeNav;
        }
    });
