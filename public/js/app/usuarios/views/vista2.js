define([
  'usuarios/collection/collection',
  'text!templates/list.html',
  'usuarios/model/model',
  'text!templates/modal-windows.html',
  'usuarios/views/loading'
], function(ProjectsCollection,
            projectsListTemplate  ,
            ModelUsers ,
            modalWindowsView ,
            loadingMaskView){
  

  var viewVista = Backbone.View.extend({
    el:$(".contenedores"),

    events : {
        'click .savesave' : 'metodo'
    },

    render: function(){
      console.log('vista2');
        
        var template = _.template(modalWindowsView,{});
            this.$el.append(template);
    },
    metodo : function(){
      alert('metodo de vista2');
    }
});

  return viewVista;

});