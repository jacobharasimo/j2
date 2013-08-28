'use strict';

angular.module('j2App')
  .directive('project', function () {
    return {
        templateUrl: 'projectItem.html',
        restrict: 'A',
        replace:'true',
      link: function postLink(scope, element, attrs) {
          scope.flipped=false;

          scope.flip = function () {
              scope.flipped=!scope.flipped;
          };
          scope.flipFront = function(){
              scope.flipped=false;
          }
          scope.moreDetails = function(){
              /*fire the modal and then flip the card*/
          };
      }
    };
  });
