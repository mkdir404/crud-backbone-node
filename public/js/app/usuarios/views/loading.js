define([
   'text!templates/loading.html'
], function(loadingTemplate){
  
  var  loading = Backbone.View.extend({

    showPleaseWait:function(){
     this.maskload.modal();
    },

    hidePleaseWait:function(){
      this.maskload.modal('hide');
    },

    initialize: function(){
      this.maskload = $(loadingTemplate);
    }
});
  return loading;
});