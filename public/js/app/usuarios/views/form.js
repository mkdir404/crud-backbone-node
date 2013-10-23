define([
  'usuarios/collection/collection',
  'text!templates/form.html',
  'usuarios/model/model',
], function(ProjectsCollection, userFormTemplate , ModelUsers){
  

  var formTemplate = Backbone.View.extend({
    el:$('#myModal'),

    params : null ,

    events:{
      'click  #nombre' :  'metodo'
    },

     initialize:function(config){

        self            = this;
        self.globalConf = config;
        self.panelName  = 'myModal';
    },

    setParams:function(params){
      console.log(params);
    },

    render: function(data){
      
      var selt = this;

      $('#'+self.panelName).empty();
      self = this;
      var items;
      var compiledTemplate = _.template(userFormTemplate,{ items : self.globalConf , params : data });
      $('#'+self.panelName ).html(compiledTemplate);
      
      return self;
    }
});

  return formTemplate;

});