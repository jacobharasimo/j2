'use strict';

angular.module('j2App', ['ngRoute', 'ngAnimate', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/myWork.html',
                controller: 'MyWorkCtrl'
            })
            .when('/MyClients', {
                templateUrl: 'views/myClients.html',
                controller: 'MyClientsCtrl'
            })
            .when('/MyWork', {
                templateUrl: 'views/myWork.html',
                controller: 'MyWorkCtrl'
            })
            .when('/MyWork/:id', {
                templateUrl: 'views/project.html',
                controller: 'ProjectCtrl'
            })
            .when('/MyLanguages', {
                templateUrl: 'views/myLanguages.html',
                controller: 'MyLanguagesCtrl'
            })
            .when('/MyHistory', {
                templateUrl: 'views/myHistory.html',
                controller: 'MyHistoryCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).run(function ($rootScope,Page) {

        $rootScope.$on("$routeChangeSuccess",function(){
            $("body").removeClass("active");
        });
        var $doc = $(document),
            Modernizr = window.Modernizr;

        $(document).ready(function () {
            $.fn.foundationAlerts ? $doc.foundationAlerts() : null;
            $.fn.foundationButtons ? $doc.foundationButtons() : null;
            $.fn.foundationAccordion ? $doc.foundationAccordion() : null;
            $.fn.foundationNavigation ? $doc.foundationNavigation() : null;
            $.fn.foundationTopBar ? $doc.foundationTopBar() : null;
            $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
            $.fn.foundationTooltips ? $doc.foundationTooltips() : null;
            $.fn.foundationMagellan ? $doc.foundationMagellan() : null;
            $.fn.foundationClearing ? $doc.foundationClearing() : null;

        });

        // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
        // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
        // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
        // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
        // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

        // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
        if (Modernizr.touch && !window.location.hash) {
            $(window).load(function () {
                setTimeout(function () {
                    window.scrollTo(0, 1);
                }, 0);
            });
        }
    });
