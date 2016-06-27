(function () {
    'use strict';

    angular
        .module('onlineEditor')
        .directive('noteEditor', noteEditor);

    /** @ngInject */
    function noteEditor() {
        var directive = {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                title: '=',
                content: '='
            },
            link: function (scope, el, attr) {
                var pen = new Pen(el);
            }
        };

        return directive;

    }

})();
