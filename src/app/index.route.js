(function () {
  'use strict';

  angular
    .module('onlineEditor')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('notelist', {
        url: '/',
        templateUrl: 'app/note/note.html',
        controller: 'NoteController',
        controllerAs: 'vm'
      })
      .state('note-edit', {
        url: '/edit/:id',
        templateUrl: 'app/note/note.edit.html',
        controller: 'NoteEditController',
        controllerAs: 'vm'
      })
      .state('note-new', {
        url: '/new',
        templateUrl: 'app/note/note.new.html',
        controller: 'NoteNewController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
