'use strict';

/**
 * @ngdoc function
 * @name Ng1.service:UserService
 * @description
 * # UserService
 * Service of the Ng1
 */
angular.module('Ng1').service('UserService', function(crudFactory) {

    var crudInstance = new crudFactory({
        
        entityName: 'User',

        catalogs: [],

        adapter: function(theEntity) {
            return theEntity;
        },

        adapterIn: function(theEntity) {

        },

        adapterOut: function(theEntity, self) {

        },

        dependencies: [

        ]
    });

    return crudInstance;
});