'use strict';

angular.module('j2App')
  .controller('ProjectCtrl', function ($filter,$scope,$routeParams,Page,projects) {
        var projectID = $routeParams.id.replace(/_/g," ");
        console.log(projectID);
        $scope.Project = Page.ActiveProject();
  });
