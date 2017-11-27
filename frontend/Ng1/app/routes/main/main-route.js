'use strict';

/**
 * @ngdoc function
 * @name Ng1.controller:MainController
 * @description
 * # MainController
 * Controller of the Ng1
 */
angular.module('Ng1').controller('MainController', function($scope, $mdSidenav, $timeout) {

    $scope.toggleMainSideNav = buildToggler('main-sidenav');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }

    $timeout(function() {
        $('#mainSection').css('visibility', 'visible');
    });

});
