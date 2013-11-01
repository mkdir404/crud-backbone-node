define([
  'usuarios/collection/collection',
  'text!templates/form-nuevo.html',
  'usuarios/model/model',
  'usuarios/views/vista2',
  'usuarios/views/loading'
], function(ProjectsCollection,
            viewFormNew  ,
            ModelUsers ,
            vista2 ,
            loadingMaskView){
  

  var viewVista = Backbone.View.extend({
    el: $(".contenedores"),

    events : {
        'click #fire-form' : 'metodo'
    },

    render: function(){
        var template = _.template(viewFormNew,{});
            this.$el.html(template);
        
    },
    metodo : function(){
      //alert('metodo de vista');  

      console.log('metodo entra')

      console.log( $('#form-users').length );

      if($('#form-users').length > 0 ){

        $('#form-users').modal('show');
      
      }else{

        this.vistaExterna = new vista2();
        this.vistaExterna.render();

        $('#form-users').modal('show');
        
      }
      
      return this;
    }
});

  return viewVista;

});