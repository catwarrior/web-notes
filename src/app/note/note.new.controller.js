(function () {
    'use strict';

    angular
        .module('onlineEditor')
        .controller('NoteNewController', NoteNewController);

    /** @ngInject */
    function NoteNewController($location, Notes) {
        var vm = this;
        vm.editor = new Pen('#editor');
        vm.title = '';
        vm.content = '';
        
        vm.save = function () {
            vm.content = vm.editor.getContent();
            Notes.$add({
                title: vm.title,
                content: vm.content
            });
            
            vm.title = '';
            vm.content = '';
            vm.editor.setContent(vm.content);

            $location.path('/note');
        }
    }
})();
