'use strict';

angular.module('j2App')
    .controller('GlobalCtrl', function ($scope, Page) {
        $scope.Page = Page;
    });
