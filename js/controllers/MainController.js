//define controller called MainController with access to name object
function MainController($scope) {
  $scope.name = 'PUT YOUR NAME HERE!';
}

//reference the module and controller
angular
  .module('app')
  .controller('MainController', MainController);

