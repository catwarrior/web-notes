(function () {
    'use strict';

    angular
        .module('onlineEditor')
        .controller('NoteController', NoteController);

    /** @ngInject */
    function NoteController($location, Notes) {
        var vm = this;
        vm.all = Notes;

        vm.all.$loaded()
            .then(function(x) {
                console.log(x);
            })
            .catch(function(error) {
                console.log("Error:", error);
            });

        vm.delete = function(note) {
            Notes.$remove(note);
        }

        vm.update = function(note) {
            Notes.$save(note);
        }
    }
})();
