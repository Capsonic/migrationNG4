'use strict';

/**
 * @ngdoc function
 * @name Ng1.controller:UserController
 * @description
 * # UserController
 * Controller of the Ng1
 */
angular.module('Ng1').controller('UserController', function($scope, formController, UserService) {
    var ctrl = new formController({
        scope: $scope,
        entityName: 'User',
        baseService: UserService,
        afterCreate: function(oEntity) {

        },
        afterLoad: function(oEntity) {

        }
    });
	
	ctrl.load();
});
