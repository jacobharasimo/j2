'use strict';

angular.module('j2App')
    .controller('MyHistoryCtrl', function ($scope,Page) {
        Page.setTitle("My History");
        Page.SetActiveNav("#MyHistory");
    });
