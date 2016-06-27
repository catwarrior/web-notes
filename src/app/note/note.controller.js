(function () {
    'use strict';

    angular
        .module('onlineEditor')
        .controller('NoteController', NoteController);

    /** @ngInject */
    function NoteController() {
        var vm = this;

        vm.all = [
            { title: "note1" },
            { title: "note1" },
            { title: "note1" },
            { title: "note1" }
        ];
    }
})();
