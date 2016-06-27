(function() {
  'use strict';

  angular
    .module('onlineEditor')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('notelist', {
        url: '/note',
        templateUrl: 'app/note/note.html',
        controller: 'NoteController',
        controllerAs: 'notes'
      })
      .state('note', {
        url: '/note/new',
        templateUrl: 'app/note/note.edit.html',
        controller: 'NoteEditController',
        controllerAs: 'note'
      });

    $urlRouterProvider.otherwise('/');
  }

})();