define(['usuarios/model/model'], function(ProjectModel){
  var ProjectCollection = Backbone.Collection.extend({
	url: '/usuarios',
    model: ProjectModel
  });
  // You don't usually return a collection instantiated
  return ProjectCollection;
});