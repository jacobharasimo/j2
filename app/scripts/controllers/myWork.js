'use strict';

angular.module('j2App')
    .controller('MyWorkCtrl', function ($scope,$routeParams,Page,projects) {
        Page.setTitle("My Work");
        Page.SetActiveNav("#MyWork");
        $scope.ProjectList=projects.list({},function(response){

        });
    });
