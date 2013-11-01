define([
   'text!templates/loading.html'
], function(loadingTemplate){
  
  var  loading = Backbone.View.extend({

    showPleaseWait:function(){
     this.maskload.modal();
    },

    hidePleaseWait:function(){

      self = this;

      setTimeout(function(){
          self.maskload.modal('hide');
      },1000); // solo es para mostrar el mensaje de carga 

      
    },

    initialize: function(){
      this.maskload = $(loadingTemplate);
    }
});
  return loading;
});