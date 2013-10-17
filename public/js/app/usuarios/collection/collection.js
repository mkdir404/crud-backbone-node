define(['usuarios/model/model'], function(ProjectModel){
  var ProjectCollection = Backbone.Collection.extend({
	model:ProjectModel,
	url: '/usuarios'
  });
  // You don't usually return a collection instantiated
  return ProjectCollection;
});