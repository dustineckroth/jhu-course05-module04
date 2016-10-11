(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams', 'data'];
function ItemsController($stateParams, data) {
  var itemsCtrl = this;
  itemsCtrl.items = data.menu_items;
  itemsCtrl.category = data.category;
}

})();
