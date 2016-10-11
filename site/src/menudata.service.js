(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function() {

      return $http.get('//davids-restaurant.herokuapp.com/categories.json')
                  .then(function(result) {
        console.log(result);
        return result;
      });
    }

    service.getItemsForCategory = function(categoryShortName) {

      return $http.get('//davids-restaurant.herokuapp.com/categories.json',
                  { "params": { "category": categoryShortName }})
                  .then(function(result) {
        console.log(result);
        return result;
      });
    }
  }

})();
