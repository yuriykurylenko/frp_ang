'use strict';

var userForm = angular.module('userForm', []);

userForm.controller('userFormCtrl', ['$scope', function($scope) {
    $scope.passStrength = true;

    var available = function(username) {
        return (username || '').length > 4;
    }

    var strong = function(pass) {
        return (pass || '').length > 5;
    }

    $scope.availabilityText = function(username) {
        return (!available(username) ? 'Not ' : '') +  'Available';
    }

    $scope.passStrengthText = function(pass) {
        return strong(pass) ? 'Strong' : 'Weak';
    }

    $scope.availabilityCSSClass = function(username) {
        return 'text-' + (available(username) ? 'success' : 'error');
    }

    $scope.passStrengthCSSClass = function(pass) {
        return 'text-' + (strong(pass) ? 'success' : 'error');
    }

    $scope.btnDisabled = function(username, pass) {
        return (!available(username) || !strong(pass)) ? 'disabled' : '';   
    }
}]);