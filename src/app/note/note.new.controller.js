(function () {
    'use strict';

    angular
        .module('onlineEditor')
        .controller('NoteNewController', NoteNewController);

    /** @ngInject */
    function NoteNewController($location, Notes) {
        var vm = this;
        var editor = new Pen('#editor');
        vm.title = '';
        vm.content = '';
        
        vm.add = function () {
            vm.mainbody = editor.getContent();
            Notes.$add({
                title: vm.title,
                mainbody: vm.mainbody
            }).then(function(ref) {
                var id = ref.key();
                console.log("added record with id " + id);
            });
            
            vm.title = '';
            vm.content = '';
            vm.editor.setContent(vm.mainbody);

            $location.path('/note');
        }
    }
    
})();
