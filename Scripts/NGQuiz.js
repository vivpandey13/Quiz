var app = angular.module('myApp', []);
app.controller('quizCtrl', function ($scope, $http) {
    $scope.results = [];
    $scope.ans = [];
    $scope.quizSubmitted = false;
    $scope.correctAnswerCount = 0;
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

    $scope.validate = function () {
        $scope.quizSubmitted = true;
        $scope.results.forEach(function(item, index){
            if($scope.ans[index]===item.correct_answer){
                $scope.correctAnswerCount++;
            }
        });
        
    }
});
