(function () {
    'use strict';

    angular
        .module('onlineEditor')
        .controller('NoteController', NoteController);

    /** @ngInject */
    function NoteController($location, Notes) {
        var vm = this;
        vm.all = Notes;
    }
})();
