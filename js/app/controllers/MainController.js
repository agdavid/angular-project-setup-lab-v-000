//define controller called MainController with access to name object
function MainController($scope) {
  $scope.name = 'ANTONIO!';
}

//reference the module and controller
angular
  .module('app')
  .controller('MainController', MainController);

