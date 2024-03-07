var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/login", {
      templateUrl: "login/index.html",
   
    })
    .when("/calculator", {
      templateUrl: "calculator/index.html",
      controller: "calCtrl",
    });
});

app.controller("calCtrl", function ($scope) {
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


