angular
  .module("calculatorApp", [])
  .controller("CalculatorController", function ($scope) {
    $scope.numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    $scope.operators = ["+", "-", "*", "/"];
    $scope.result = "";
    $scope.currentNumber = "";
    $scope.operator = "";
    $scope.appendNumber = function (number) {
      $scope.currentNumber += number;
      $scope.result = $scope.currentNumber;
    };
    $scope.applyOperator = function (op) {
      if ($scope.operator) {
        $scope.calculate();
      }
      $scope.operator = op;
      $scope.currentNumber = "";
    };
    $scope.calculate = function () {
      $scope.result = eval(
        $scope.result + $scope.operator + $scope.currentNumber
      );
      $scope.operator = "";
      $scope.currentNumber = $scope.result;
    };
  });
