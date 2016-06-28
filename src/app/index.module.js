(function() {
  'use strict';

  angular
    .module('onlineEditor', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr','wilddog'  ])
    .value('fbUrl', 'https://webnote.wilddogio.com/notes')
    .factory('Notes', function(fbUrl, $wilddogArray) {
      return $wilddogArray(new Wilddog(fbUrl));
    });

})();
