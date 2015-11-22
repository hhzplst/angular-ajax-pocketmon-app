app.service("pocketmonService", ["$http", function($http){
  var baseURL = "http://pokeapi.co/";
  var pokemons = [];
  var result = [];
  var re = /\/[0-9]+\//;
  var currentID = ""; 
  var count = 0;
  return {
    getPokemons: function(){
      return $http.get(baseURL + "api/v1/pokedex/1/").then(function(res){
        for(var i=0; i<6; i++){
          pokemons.push(res.data.pokemon[Math.floor(Math.random()*778)]);
        }
        return pokemons;
      }).then(function(pokemons){
        return pokemons.map(function(el, index){
          currentID = el.resource_uri.match(re)[0];

          Promise.all([
            $http.get(baseURL + "api/v1/pokemon" + currentID).then(function(res1){
              return res1.data;
            }), 
            $http.get(baseURL + "api/v1/sprite" + currentID).then(function(res2){
              return res2.data.image;
            })
          ]).then(function(res){
            result.push(res);
          });
            return result;
        });
            // return result;
      });
    }
  };
    
}]);