'use strict';

angular.module('j2App')
    .controller('MyWorkCtrl', function ($scope,Page) {
        $scope.ShowMenu = false;
        $scope.Page=Page;
        Page.setTitle("Home");
    });
