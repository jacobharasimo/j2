'use strict';
angular.module('j2App')
    .controller('GlobalCtrl', function ($scope, Page) {
        console.log('a')
        $scope.Page = Page;

    });
