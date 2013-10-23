define([], function(){
  var ProjectModel = Backbone.Model.extend({
     urlRoot: '/usuarios/',
     idAttribute: "_id",
     initialize:function(attr){
      //  console.log(attr);
     },
     validate : function(attr,opt){
        if(attr.nombre === ''){
          return 'nombre';
        }
        if(attr.username === ''){
          return 'username';
        }
     }
  });
  // Return the model for the module
  return ProjectModel;
});