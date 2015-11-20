app.directive("ivyPocketmon", function(){
  return {
    templateUrl: "partials/pocketmon.html",
    scope: {
      pocketmon: "="
    }
  };
});

app.directive('gsChangeBackground', function() {
  return {
    link: function(scope, element, attrs) {
      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', 'yellow');
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      });
    }
  };
});