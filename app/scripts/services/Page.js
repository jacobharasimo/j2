'use strict';

angular.module('j2App')
    .factory('Page', function () {
        var MenuOpen = false;
        var title = 'abc';

        return {
            title: function () {
                return title;
            },
            setTitle: function (newTitle) {
                title = newTitle;

            },
            MenuOpen: function () {
                return MenuOpen;
            },
            ToggleMenu: function () {
                MenuOpen = !MenuOpen;
            }
        };
    });
