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
        'click #otro' : 'metodo'
    },

    render: function(){
        var template = _.template(viewFormNew,{});
            this.$el.html(template);
        
    }
});

  return viewVista;

});