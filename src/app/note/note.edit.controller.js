(function () {
    'use strict';

    angular
        .module('onlineEditor')
        .controller('NoteEditController', NoteEditController);

    /** @ngInject */
    function NoteEditController($location, $stateParams, fbUrl, $wilddogObject) {
        var vm = this;

        var editor = new Pen('#editor');

        $wilddogObject(new Wilddog(fbUrl + "/"+ $stateParams.id)).$loaded()
            .then(function(data) {
                vm.note = data;
                editor.setContent(vm.note.mainbody);
                console.log(vm.note);
            })
            .catch(function(error){
                console.log('error', error);
            });

            vm.save = function() {
                vm.note.mainbody = editor.getContent();
                vm.note.$save();
        
                $location.path('/note');
            };
    }
})();
