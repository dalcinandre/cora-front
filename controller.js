angular.module('pesagem', []).controller('pesoCtrl', function ($scope, $http) {
    $scope.teste = 'Pesagem';

    $scope.enviaEmail = function () {
        $http.get('http://localhost:8080/pesagem/' + $scope.peso + '/' + $scope.email).then(function (retorno) {
            $scope.retorno = retorno.data;
        }).catch(function (e) {
            console.error(e);
        });
    }
});