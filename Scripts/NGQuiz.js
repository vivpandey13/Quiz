var app = angular.module('myApp', []);
app.controller('quizCtrl', function ($scope, $http) {
    $scope.results = [];
    $scope.quizSubmitted = false;
    $scope.getData = function () {

        var url = 'https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=multiple';
        $http.get(url)
            .then(function (response) {
                $scope.results = response.data.results;
                $scope.results.forEach(element => {
                    element.answers = element.incorrect_answers;
                    element.answers.push(element.correct_answer);
                });
            });
    }

    $scope.validate = function (formData) {
        $scope.quizSubmitted = true;
        $scope.quizResult = "You clicked submit!";
        
    }
});