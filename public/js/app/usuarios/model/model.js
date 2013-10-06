define([], function(){
  var ProjectModel = Backbone.Model.extend({
	   urlRoot: '/usuarios/',
      defaults: {
      nombre: "XXXXX"
    },
    update : function(id){
    	this.urlRoot = '/usuarios/'+id
    }

  });
  // Return the model for the module
  return ProjectModel;
});