define([], function(){
  var ProjectModel = Backbone.Model.extend({
     urlRoot: '/usuarios/',
     idAttribute: "_id",
     initialize:function(attr){
      //  console.log(attr);
     },
     validate : function(attr,opt){
        
        var objerr = new Array();

        if(attr.nombre === ''){
          objerr.push('nombre');
        }
        if(attr.username === ''){
          objerr.push('username');
        }

        if(objerr.length>0){ return objerr; }
          
     }
  });
  // Return the model for the module
  return ProjectModel;
});