define([
  'usuarios/collection/collection',
  'text!templates/list.html',
  'usuarios/model/model',
], function(ProjectsCollection, projectsListTemplate , ModelUsers){
  var ProjectListView = Backbone.View.extend({
    el: $("#contenedor"),
    events:{
      'submit .edit-user-form': 'saveUser'
    },
    saveUser: function(ev){

      modelUsers =  new ModelUsers;
      currentDate = new Date();
      
      modelUsers.save({

      'nombre'            : $('#nombre').val(),
      'username'          : $('#username').val(),
      'email'             : $('#email').val(),
      'apellido_paterno'  : 'Dame',
      'apellido_materno'  : 'Perez',
      'genero'            : $('#genero').val(),
      'foto'              : 'una futa a una imagen',
      'fecha_nacimiento'  :  $('#dia').val()+'/'+$('#mes').val()+'/'+$('#anno').val(),
      'password'          : 'xxxxxx',
      'fecha_alta'        : currentDate,
      'rol_k'             : 1


    },{

      success:function(usuario){
      alert('envio completo')
    }
  });

      return false;

    },
    initialize: function(){
        
          this.collection = new ProjectsCollection;
          this.collection.fetch({
            success: function(collection){


      // Compile the template using Underscores micro-templating

              var compiledTemplate = _.template( projectsListTemplate,{ projects : collection.toJSON() } );
                  $("#contenedor").html(compiledTemplate);
           
          }
        },projectsListTemplate);
    }
});

  // Returning instantiated views can be quite useful for having "state"
  return ProjectListView;
});