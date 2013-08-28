'use strict';

angular.module('j2App')
    .factory('Page', function (projects) {
        var activeProject ={};
        var MenuOpen = false;
        var TopNav = [
            {
                ID:'',
                Title: "My Projects",
                Link: "#MyWork",
                Active: false
            },
            {
                ID:'',
                Title: "My Clients",
                Link: "#MyClients",
                Active: false
            },
            {
                ID:'',
                Title: "My Languages",
                Link: "#MyLanguages",
                Active: false
            },
            {
                ID:'',
                Title: "My History",
                Link: "#MyHistory",
                Active: false
            }
        ];



        var title = '';
        return {
            ActiveProject: function(){
                return activeProject;
            },
            setActiveProject: function (newProject) {
                activeProject = newProject
            },
            TopNav: function () {
                return TopNav;
            },
            SetActiveNav:function(activeNav){
                for (var i = 0; i<TopNav.length;++i){
                    if(TopNav[i].Link == activeNav){
                        TopNav[i].Active=true;
                    }
                    else{
                        TopNav[i].Active=false;
                    }
                }
            },
            title: function () {
                return title;
            },
            setTitle: function (newTitle) {
                title = newTitle
            }
        };
    });