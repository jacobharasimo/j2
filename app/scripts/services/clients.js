'use strict';

angular.module('j2App')
  .factory('clients', function ($resource) {
        return $resource('scripts/data/clients.json', {}, {
            list: {method: 'GET', isArray: true}
        });
  });
