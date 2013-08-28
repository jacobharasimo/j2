'use strict';

angular.module('j2App')
  .factory('projects', function ($resource) {
      return $resource('/scripts/data/projects.json',{},{
          list:{method:'GET',isArray:true}
      });
  });
