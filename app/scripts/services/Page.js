'use strict';

angular.module('j2App')
    .factory('Page', function () {
        var MenuOpen = false;


        return {
            MenuOpen: function () {
                return MenuOpen;
            },
            ToggleMenu: function () {
                MenuOpen = !MenuOpen;
            }
        };
    });
