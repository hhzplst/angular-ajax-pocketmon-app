app.controller("PocketmonCtrl",["$scope", "pocketmonService", function($scope, pocketmonService){

  Promise.resolve(pocketmonService.getPokemons()).then(function(data){
    $scope.pocketmons = data;
  });
}]);