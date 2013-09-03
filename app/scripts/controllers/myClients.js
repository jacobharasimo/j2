'use strict';

angular.module('j2App')
    .controller('MyClientsCtrl', function ($scope,Page,clients) {
        Page.setTitle("My Clients");
        Page.SetActiveNav("#MyClients");
        $scope.Clients = clients.list({},function(response){

        });
    });
