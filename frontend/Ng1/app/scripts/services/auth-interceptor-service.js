'use strict';

/**
 * @ngdoc service
 * @name Ng1.authInterceptorService
 * @description
 * # authInterceptorService
 * Factory in the Ng1.
 */
angular.module('Ng1').factory('authInterceptorService', function($q, $location, localStorageService) {
    var authInterceptorServiceFactory = {};

    var _request = function(config) {

        config.headers = config.headers || {};

        var authData = localStorageService.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }

        return config;
    }

    var _responseError = function(rejection) {
        if (rejection.status === 401) {
            localStorageService.remove('authorizationData');
            $location.path('/login');
        }
        return $q.reject(rejection);
    }

    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;

    return authInterceptorServiceFactory;
});
