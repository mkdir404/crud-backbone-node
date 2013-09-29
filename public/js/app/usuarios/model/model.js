define([], function(){
  var ProjectModel = Backbone.Model.extend({
	urlRoot: '/usuario',
    defaults: {
      nombre: "XXXXX"
    }
  });
  // Return the model for the module
  return ProjectModel;
});