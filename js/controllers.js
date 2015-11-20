app.controller("PocketmonCtrl",["$scope", "pocketmonService", function($scope, pocketmonService){
  pocketmonService.getPokemons().then(function(result){
    $scope.results = result;
  });
}]);

app.controller("linkCtrl", ["$scope", function($scoope){

}]);