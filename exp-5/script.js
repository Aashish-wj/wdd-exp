var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope) {
  $scope.calculate = function (op) {
    switch (op) {
      case "+":
        $scope.result = parseInt($scope.num1) + parseInt($scope.num2);
        break;
      case "-":
        $scope.result = parseInt($scope.num1) - parseInt($scope.num2);
        break;
      case "*":
        $scope.result = parseInt($scope.num1) * parseInt($scope.num2);
        break;
      case "/":
        $scope.result = parseInt($scope.num1) / parseInt($scope.num2);
        break;
    }
  };
});
