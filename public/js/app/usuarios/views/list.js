define([
  'usuarios/collection/collection',
  'text!templates/list.html',
  'usuarios/model/model',
], function(ProjectsCollection, projectsListTemplate , ModelUsers){
  

  var ProjectListView = Backbone.View.extend({
    el: $("#contenedor"),
    
    paginator:{

      firstPage: 0,

      // which page should the paginator start from
      // (also, the actual page the paginator is on)
      currentPage: 0,

      // how many items per page should be shown
      perPage: 10,

      // a default number of total pages to query in case the API or
      // service you are using does not support providing the total
      // number of pages for us.
      // 10 as a default in case your service doesn't return the total
      totalPages: 0,

      // a default number 

      displayPages: 5

    },

    events:{
      'click  .btn-form-users' : 'saveUser',
      'click  .edit-user'      : 'editUser',
      'click  .icon-remove'    : 'deleteRows',
      'click  .saveAll'        : 'saveCollect',
      'click .per-page'        : 'perPage',
      'click .nav-pag'         : 'nextPrev'
    },

    initialize:function(){
        self = this;
        self.modelUsers       = new ModelUsers();
        self.collectionUsers  = new ProjectsCollection();
        self.currentDate      = new Date();

        self.collectionUsers.on("change", function(user) {
                console.log("Se añade el usuario " + user.get("nombre") + "!");
                console.log(self.collectionUsers);
                console.log(self.modelUsers);
        });
    },

    saveCollect : function(){

      self = this;

      _.find(self.collectionUsers.models, function(cliente){                                         
          Backbone.sync('create',cliente,{
            success:function(user){
              self.render();
            },
            error:function(error){
            console.log(error);
            }
          });                                      
      })

    },

    saveUser: function(){
 
  self.modelUsers.set({
      "_id"              : "5258dee7d0f095880a000001",
      "nombre"           : 'Ricardooooooooo',
      "username"         : 'mkdir3030303030303',
      "email"            : 'Email',
      "apellido_paterno" : 'No lo seeeeee',
      "apellido_materno" : 'No lo seeeeeeeee',
      "genero"           : 'hombre',
      "foto"             : 'ruta de foto',
      "fecha_nacimiento" : '09-02-03',
      "password"         : '123',
      "fecha_alta"       : self.currentDate ,
      "rol_k"            : 3
      });
  
  if (self.modelUsers.isNew()) {
            self.modelUsers.save(this.model, {
                success:function () {
                    //app.navigate('wines/' + self.model.id, false);
                    alert('se añadio un usuario');
                }
            });
        } else {
            self.modelUsers.save(this.model , {
              success : function(data){
                console.log(data);
              }
            });
            alert('se modifico el row correcatemnete');
        }

        /*self.modelUsers.save(this.model,{
          success:function(){
            alert('se guardo con exito');
          }
        });*/

        return false;
     
    },

    editUser: function(ev){


      Backbone.sync = function(method, model) {
          alert(method + ": " + JSON.stringify(model));
        };



      var self = this;

      var usuario =  new ModelUsers({id:ev.currentTarget.id});

      usuario.save({

        "nombre": "Espero se actualizacion",
        "username": "Moooooduuufiiicaaadddoooo",
        "email": "In.mi@erosnectellus.co.uk",
        "apellido_paterno": "Burris, Uriah Q.",
        "apellido_materno": "Peterson, Debra F.",
        " rol_k": 2

      },{
          success:function(){
            alert('se actualizo con exito ' + usuario.id);
        }
      });


     /* modelUsers.update(ev.currentTarget.id);
      modelUsers.set({

      'nombre'            : 'Roberoooooooooo',
      'username'          : 'Algo',
      'email'             : 'algo@hotmail.com',
      'apellido_paterno'  : 'Dame',
      'apellido_materno'  : 'Perez',
      'genero'            : 'Machin',
      'foto'              : 'una futa a una imagen',
      'fecha_nacimiento'  : '15-90-100',
      'password'          : 'xxxxxx',
      'fecha_alta'        : self.currentDate,
      'rol_k'             : 1

      });

    
    Backbone.sync('update',modelUsers,{
        success:function(user){
          alert('se actualizo');
          console.dir(user);
          self.render();
        },
        error:function(error){
          alert('error');
        }
      });*/

    },

    deleteRows : function(ev) {

      var self = this;

        self.modelUsers.update(ev.currentTarget.id);
        Backbone.sync('delete',self.modelUsers,{
            success:function(user){
              alert('se elimino');
              self.render();
            },
            error:function(error){
              alert('error');
            }
          });

         self.render();
    },

    perPage : function(ev){
        var self = this;
        self.paginator.currentPage = 0;
        self.paginator.currentPage = parseInt(ev.currentTarget.id);
        self.render();
    },

    nextPrev : function(ev){

        var self = this;        
        if(ev.currentTarget.id =='next' && self.paginator.currentPage >= 0 && self.paginator.currentPage < self.paginator.totalPages-self.paginator.perPage){
            self.paginator.currentPage+=self.paginator.perPage
            self.render();
        } 

        if(ev.currentTarget.id =='prev' && self.paginator.currentPage > 0 ){
           self.paginator.currentPage-=self.paginator.perPage
            self.render();
        }       
    },


    render: function(){

        var self = this;  
        self.collectionUsers.fetch({context:this.collectionUsers}).done(function(collection) { 
             var perPage = collection.splice(self.paginator.currentPage, self.paginator.perPage );
             var paginator = Math.ceil(this.length / self.paginator.perPage);
                 self.paginator.totalPages = this.length;
             var compiledTemplate = _.template( projectsListTemplate,{ projects : perPage , totalRows : paginator , perPage : self.paginator.perPage , displayPages : self.paginator.displayPages  } );
                  self.$el.html(compiledTemplate);         
       });

        return self;
    }
});

  return ProjectListView;

});