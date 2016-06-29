(function () {
    'use strict';

    angular
        .module('onlineEditor')
        .controller('NoteController', NoteController);

    /** @ngInject */
    function NoteController($location, Notes) {
        var vm = this;
        vm.all = Notes;

        console.log(1);

        // dirty work here!!!
        // $('.unit-list').on('mouseover', function (e) {
        //     var tmp = $('.mask', $(e.target).closest('li'));
        //     tmp.addClass('mson');
        //     console.log(11);
        // }).on('mouseleave', function (e) {
        //     var tmp = $('.mask', $(e.target).closest('li'));
        //     tmp.removeClass('mson');

        //     console.log(12);
        // });

        vm.delete = function (note) {
            Notes.$remove(note);
        }

        vm.update = function (note) {
            Notes.$save(note);
        }
    }
})();
