var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var usuarios = new Schema({

	nombre			 : { type : String },
	username		 : { type : String },
	email			 : { type : String },
	apellido_paterno : { type : String },
	apellido_materno : { type : String },
	genero			 : { type : String },
	foto			 : { type : String },
	fecha_nacimiento : { type : String },	
	password		 : { type : String },
	fecha_alta		 : { type  : Date },
	rol_k		     : { type : Number }

});

module.exports = mongoose.model('Usuarios', usuarios);