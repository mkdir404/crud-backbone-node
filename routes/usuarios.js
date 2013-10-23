//File: routes/tvshows.js
module.exports = function(app) {

  var Usuarios = require('../models/usuarios.js'),
      fs    = require('fs');

  //GET - Return all tvshows in the DB
  findAllUsers = function(req, res) {
    Usuarios.find(function(err, usuarios) {
      if(!err) {
        console.log('GET /usuarios');
        res.send(usuarios);
      } else {
        console.log('ERROR: ' + err);
        }
    });
  };

  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
  	Usuarios.findById(req.params.id, function(err, usuarios) {
  		if(!err) {
        console.log('GET /usuarios/' + req.params.id);
  			res.send(usuarios);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new TVShow in the DB
  addUser = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var usuarios = new Usuarios({

      nombre            : req.body.nombre,
      username          : req.body.username,
      email             : req.body.email,
      apellido_paterno  : req.body.apellido_paterno,
      apellido_materno  : req.body.apellido_materno,
      genero            : req.body.genero,
      foto              : req.body.foto,
      fecha_nacimiento  : req.body.fecha_nacimiento,
      password          : req.body.password,
      fecha_alta        : req.body.fecha_alta,
      rol_k             :req.body.rol_k


  	});

  	usuarios.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(usuarios);
  };

  //PUT - Update a register already exists
  updateUser = function(req, res) {

    Usuarios.findById(req.params.id, function(err, usuario) {
      
      usuario.nombre            = req.body.nombre;
      usuario.username          = req.body.username;
      usuario.email             = req.body.email;
      usuario.apellido_paterno  = req.body.apellido_paterno;
      usuario.apellido_materno  = req.body.apellido_materno;
      usuario.genero            = req.body.genero;
      usuario.foto              = req.body.foto;
      usuario.fecha_nacimiento  = req.body.fecha_nacimiento;
      usuario.password          = req.body.password;
      usuario.fecha_alta        = req.body.fecha_alta;
      usuario.rol_k             = req.body.rol_k;

  		usuario.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(usuario);

  		});
  	});
  }

  //DELETE - Delete a TVShow with specified ID
  deleteUsuario = function(req, res) {
  	Usuarios.findById(req.params.id, function(err, usuario) {
  		usuario.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}

        res.send(usuario);

  		})
  	});
  }

  //Link routes and functions
  app.get('/usuarios', findAllUsers);
  app.get('/usuarios/:id', findById);
  app.post('/usuarios', addUser);
  app.put('/usuarios/:id', updateUser);
  app.delete('/usuarios/:id', deleteUsuario);

}