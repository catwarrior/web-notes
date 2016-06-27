(function () {
    'use strict';

    angular
        .module('onlineEditor')
        .controller('NoteEditController', NoteEditController);

    /** @ngInject */
    function NoteEditController() {
        var vm = this;
        vm.editor = new Pen('#editor');
        
        vm.id = Date.now();
        vm.title = "adfasdfasdf";
        vm.content = "<h2>Enjoy live editing (+markdown)</h2>";

        vm.load = function() {
            vm.editor.setContent(vm.content);
        }

        vm.save = function() {
            vm.content = vm.editor.getContent();
            console.log(vm.content);
        };
                
        vm.load();
    }
})();
