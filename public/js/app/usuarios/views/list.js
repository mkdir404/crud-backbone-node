define([
  'usuarios/collection/collection',
  'text!templates/list.html',
  'usuarios/model/model',
], function(ProjectsCollection, projectsListTemplate , ModelUsers){
  

  var ProjectListView = Backbone.View.extend({
    el: $(".contenedores"),
    
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
      'click  .per-page'       : 'perPage',
      'click  .nav-pag'        : 'nextPrev'
    },

    initialize:function(){
        self = this;
        self.modelUsers       = new ModelUsers();
        self.collectionUsers  = new ProjectsCollection();
        self.currentDate      = new Date();
    },

    saveUser: function(){
 
  self.modelUsers.set({
      /*"_id"              : "5258dee7d0f095880a000001",*/ // set param when edit
      "nombre"           : $('#nombre').val(),
      "username"         : $('#username').val(),
      "email"            : $('#password').val(),
      "apellido_paterno" : $('#a_paterno').val(),
      "apellido_materno" : $('#a_materno').val(),
      "genero"           : $('#genero').val(),
      "foto"             : 'xxxxx',
      "fecha_nacimiento" : $('#dia').val() +'-'+ $('#mes').val() +'-'+ $('#anno').val(),
      "password"         : $('#password').val(),
      "fecha_alta"       : self.currentDate ,
      "rol_k"            : $('#rol').val()
      });
  
  if (self.modelUsers.isNew()) {
            self.modelUsers.save(this.model, {
                success:function () {
                    //app.navigate('wines/' + self.model.id, false);
                    //alert('se añadio un usuario');
                    $('#myModal').modal('hide');
                   // self.render();
                    $('#mensajes').append('<p>Exito</p>');

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