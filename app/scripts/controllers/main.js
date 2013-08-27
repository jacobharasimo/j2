'use strict';

angular.module('j2App')
  .controller('MainCtrl', function ($scope) {
     $scope.ShowMenu = false;
    $scope.toggleMenu = function(){
        $scope.ShowMenu = !$scope.ShowMenu;
    };
  });
