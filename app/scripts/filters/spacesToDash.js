'use strict';

angular.module('j2App')
  .filter('spacesToDash', function () {
    return function (input) {
        if (input == undefined) {
            return;
        }
        var out = input.replace(/ /g,"_");

      return out;
    };
  });
