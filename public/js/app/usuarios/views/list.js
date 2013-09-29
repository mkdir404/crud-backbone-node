define([
  'usuarios/collection/collection',
  'text!templates/list.html'
], function(ProjectsCollection, projectsListTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $("#contenedor"),
    initialize: function(){
        
          this.collection = new ProjectsCollection;
          this.collection.fetch({
            success: function(collection){


      // Compile the template using Underscores micro-templating

              var compiledTemplate = _.template( projectsListTemplate,{ projects : collection.toJSON() } );
                  $("#contenedor").html(compiledTemplate);
           
          }
        },projectsListTemplate);
    }
});

  // Returning instantiated views can be quite useful for having "state"
  return ProjectListView;
});