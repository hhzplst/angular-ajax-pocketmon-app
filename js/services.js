app.service("pocketmonService", ["$http", function($http){
  var baseURL = "http://pokeapi.co/";
  var pokemons = [];
  var result = [];
  return {
    getPokemons: function(){
      return $http.get(baseURL + "api/v1/pokedex/1/").then(function(res){
        for(var i=0; i<5; i++){
          pokemons.push(res.data.pokemon[Math.floor(Math.random()*779)]);
        }
        return pokemons;
      }).then(function(pokemons){

        pokemons.map(function(el){
          $http.get(baseURL + el.resource_uri).then(function(res){
            el = res.data;
            return el;
          }).then(function(el){
            result.push(el);
            // console.log(el);
          });
        });

        return result;

      });
    }
  };
}]);