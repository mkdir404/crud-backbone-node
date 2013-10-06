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
      totalPages: 0

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

      var self = this;

        self.collectionUsers.on("add", function(user) {
                console.log("Se añade el usuario " + user.get("nombre") + "!");
                console.log(self.collectionUsers);
                console.log(self.modelUsers);
        });

        self.collectionUsers.add({
            
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

    return false;
     
    },

    editUser: function(ev){

      var self = this;   
      var modelUsers =  new ModelUsers();

      modelUsers.update(ev.currentTarget.id);
      modelUsers.set({

      '_id'               : ev.currentTarget.id,
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
      });

    },

    deleteRows : function(ev) {

      var self = this

        self.modelUsers.update(ev.currentTarget.id);
        Backbone.sync('delete',self.modelUsers,{
            success:function(user){
              alert('se elimino');
              console.dir(user);
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
             var paginator = this.length / self.paginator.perPage;
                 self.paginator.totalPages = this.length;
             var compiledTemplate = _.template( projectsListTemplate,{ projects : perPage , totalRows : paginator , perPage : self.paginator.perPage   } );
                  self.$el.html(compiledTemplate);         
       });

        return self;
    }
});

  return ProjectListView;

});