define(['usuarios/views/list','usuarios/model/model'], function(ProjectListView,ModelUsers){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'users': 'showUsers',
      'add-user':'addUser',

      // Default
      '*actions': 'defaultAction'
    },

    showProjects : function(){

      var projectListView = new ProjectListView();
          projectListView.render();

      //console.log(ProjectListView);
      
    },
    showUsers : function(){
     
    },

    addUser : function(){

    modelUsers =  new ModelUsers;
    var currentDate = new Date();

    modelUsers.save({

      'nombre'            : 'Robero',
      'username'          : 'Algo',
      'email'             : 'algo@hotmail.com',
      'apellido_paterno'  : 'Dame',
      'apellido_materno'  : 'Perez',
      'genero'            : 'Machin',
      'foto'              : 'una futa a una imagen',
      'fecha_nacimiento'  : '15-90-100',
      'password'          : 'xxxxxx',
      'fecha_alta'        : currentDate,


    });

    },

    defaultAction:function(){
      
    }
  });

  var initialize = function(){
    var app_router = new AppRouter();
    Backbone.history.start();
  };
  
  return {
    initialize: initialize
  };

});