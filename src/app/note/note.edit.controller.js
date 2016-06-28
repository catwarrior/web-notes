(function () {
    'use strict';

    angular
        .module('onlineEditor')
        .controller('NoteEditController', NoteEditController);

    /** @ngInject */
    function NoteEditController($location, Notes) {
        var vm = this;
        
        // vm.id = Date.now();
        // vm.title = "adfasdfasdf";
        // vm.content = "<h2>Enjoy live editing (+markdown)</h2>";

        vm.editor = new Pen('#editor');

        vm.load = function() {
            vm.editor.setContent(vm.note.content);
        }
        
        vm.save = function(){
            vm.note.content = vm.editor.getContent();
            vm.note.$save();
            console.log(vm.content);
        }

        vm.load();

    }
})();
