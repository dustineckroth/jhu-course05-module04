(function () {
'use strict';

angular.module('MenuApp')
.component('data', {
  templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
  bindings: {
    data: '<'
  }
});

})();
