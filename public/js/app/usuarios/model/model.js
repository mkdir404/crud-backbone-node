define([], function(){
  var ProjectModel = Backbone.Model.extend({
     urlRoot: '/usuarios/',
     idAttribute: "_id"
  });
  // Return the model for the module
  return ProjectModel;
});