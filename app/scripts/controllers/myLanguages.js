'use strict';

angular.module('j2App')
    .controller('MyLanguagesCtrl', function ($scope,Page,languages) {
        Page.setTitle("My Languages");
        Page.SetActiveNav("#MyLanguages");

        $scope.Languages=languages.list({},function(response){

        });
        $scope.languageDetails= function(language){
            $scope.ActiveLanguage=language;
            $("#langulageDetail").reveal();
        };
    });
