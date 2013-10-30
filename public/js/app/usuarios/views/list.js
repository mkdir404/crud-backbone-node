define([
  'usuarios/collection/collection',
  'text!templates/list.html',
  'usuarios/model/model',
  'usuarios/views/form',
  'usuarios/views/loading'
], function(ProjectsCollection, projectsListTemplate  , ModelUsers , formUsuarioView , loadingMaskView){
  

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
      'click  .icon-remove'    : 'deleteRows',
      'click  .per-page'       : 'perPage',
      'click  .nav-pag'        : 'nextPrev',
      'click  .agrUsario'      : 'loadForm',
      'click  #enviarUsuario'  : 'saveUpdate',
      'click  .edit-user'      : 'ediUser'
    },


    initialize:function(){
        var self = this;
        self.modelUsers       = new ModelUsers();
        self.collectionUsers  = new ProjectsCollection();
        self.currentDate      = new Date();
        
        configForm = {
              
              name  : 'formUsuario' ,
              title : 'Alta de Usuarios',
              id    : 'formUsuario',
              items : [{
                    label : 'Nombre',
                    type : 'text',
                    name  : 'nombre',
                    id    : 'nombre'
              },{
                  label : 'Apellido Paterno',
                  type : 'text',
                  name  : 'a-paterno',
                  id    : 'a-paterno'

              }],
              buttons:[{
                    name  : 'Guardar Usuario',
                    id    : 'enviarUsuario'
              }]

            };

        self.formUsuario      = new formUsuarioView(configForm);
        self.loadingMask      = new loadingMaskView();

    },

    saveUpdate:function(){
      //x = new ModelUsers()

      var self = this,
          obj = {
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
      };

      if($('#id_user').val()!=''){ _.extend(obj, { _id: $('#id_user').val() }); }

      self.modelUsers.set(obj);
      $('.modal-body').find('b').remove();
      $("input[type=text], textarea").css("border-color",'#cccccc');
      
      /*if(!self.modelUsers.isValid()){

            console.log('error');

          _.each(self.modelUsers.validationError,function(error){
            $('#'+error).css('border-color','red').after("<b> fuck you </b>");
          });

      }else{*/

          if (self.modelUsers.isNew()) {

                    self.modelUsers.save(this.model, {
                        success:function (data) {
                            //alert('se añadio un usuario');
                            $('#myModal').modal('hide');
                             self.render();
                             self.modelUsers.clear();
                        }
                    });
                } else {
                    self.modelUsers.save(this.model , {
                      success : function(data){
                        //console.log(data);
                        $('#myModal').modal('hide');
                        self.render();
                        self.modelUsers.clear();
                      }
                    });
                }
      //}
    },

    ediUser : function(ev){
      
      var self = this;
      
      self.modelUsers.set({_id:ev.currentTarget.id});
      self.modelUsers.fetch().done(function(data){
           self.formUsuario.render(data);
      });
    
    },

    loadForm:function(){
      var self = this;
      self.formUsuario.render();
    },

    deleteRows : function(ev) {

      var self = this;

      bootbox.confirm("¿ Esta seguro que deseas eliminar el usuario?", function(result) {
            
            self.modelUsers.set({_id:ev.currentTarget.id});
            self.modelUsers.destroy({
            success:function (data) {
                //alert('Usuario deleted successfully');             
                self.render();
            }
          });
        });
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
        self.loadingMask.showPleaseWait();

        setTimeout(function(){

            self.collectionUsers.fetch({context:this.collectionUsers}).done(function(collection) {            
             var perPage = collection.splice(self.paginator.currentPage, self.paginator.perPage );
             var paginator = Math.ceil(this.length / self.paginator.perPage);
             self.paginator.totalPages = this.length;
             var compiledTemplate = _.template( projectsListTemplate,{ projects : perPage , totalRows : paginator , perPage : self.paginator.perPage , displayPages : self.paginator.displayPages  } );
             self.$el.html(compiledTemplate);
             self.loadingMask.hidePleaseWait();
       });

        },1000); /* esta funcion de tiempo solo es de prueba para verificar que esta cargando*/

                 

        return self;
    }
});

  return ProjectListView;

});