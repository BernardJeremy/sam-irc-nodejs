var app = angular.module('app', []);

app.controller('formLoginCtrl', function($scope) {
  $scope.login = '';
  $scope.displayLoginText = function() {
    return $scope.login;
  };
});
