'use strict';

/**
 * @ngdoc function
 * @name Ng1.controller:UserListController
 * @description
 * # UserListController
 * Controller of the Ng1
 */
angular.module('Ng1').controller('UserListController', function($scope, listController, UserService) {

    var ctrl = new listController({
        scope: $scope,
        entityName: 'User',
        baseService: UserService,
        afterCreate: function(oInstance) {

        },
        afterLoad: function() {

        },
        onOpenItem: function(oItem) {

        },
        filters: {
            
        }
    });

    ctrl.load();

});
