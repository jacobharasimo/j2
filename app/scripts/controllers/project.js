'use strict';

angular.module('j2App')
  .controller('ProjectCtrl', function ($filter,$scope,$routeParams,Page,projects,$location) {
        var projectID = $routeParams.id.replace(/_/g," ");
        Page.setTitle(projectID);
        if($.isEmptyObject(Page.ActiveProject()))
        {
            projects.list({},function(response){
                for(var i = 0; i<response.length;++i){
                    if(response[i].Name == projectID){
                        Page.setActiveProject(response[i]);
                        $scope.Project = response[i];
                    }
                }
            });
        }
        $scope.Project = Page.ActiveProject();
  });
