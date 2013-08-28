'use strict';

angular.module('j2App')
    .factory('languages', function ($resource) {
        return $resource('scripts/data/languages.json', {}, {
            list: {method: 'GET', isArray: true}
        });
    });
