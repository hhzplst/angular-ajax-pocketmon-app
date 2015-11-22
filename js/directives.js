app.directive("ivyPokemon", function(){
  return {
    restrict: "E",
    templateUrl: "partials/pokemon.html",
    scope: {
      pokemon: "="
    }
  };
});