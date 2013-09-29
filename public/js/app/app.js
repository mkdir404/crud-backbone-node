// Filename: app.js
define(['routers'], function(Router){
  
  var initialize = function(){
    //console.log('Inicializado');
    Router.initialize();
  };

  return {
    initialize: initialize
  };

});