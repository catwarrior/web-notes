(function() {
  'use strict';

  angular
    .module('onlineEditor')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
