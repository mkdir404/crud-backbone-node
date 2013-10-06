//File: routes/tvshows.js
module.exports = function(app) {

  var Usuarios = require('../models/usuarios.js');

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


  /*

  updateTVShow = function(req, res) {
  TVShow.findById(req.params.id, function(err, tvshow) {
    tvshow.title   = req.body.petId;
    tvshow.year    = req.body.year;
    tvshow.country = req.body.country;
    tvshow.poster  = req.body.poster;
    tvshow.seasons = req.body.seasons;
    tvshow.genre   = req.body.genre;
    tvshow.summary = req.body.summary;

    tvshow.save(function(err) {
      if(!err) {
    console.log('Updated');
      } else {
    console.log('ERROR: ' + err);
      }

      res.send(tvshow);
    });
  });
}



  */

  //PUT - Update a register already exists
  updateUser = function(req, res) {
    Usuarios.findById(req.params.id, function(err, usuario) {
      nombre            : req.body.nombre;
      username          : req.body.username;
      email             : req.body.email;
      apellido_paterno  : req.body.apellido_paterno;
      apellido_materno  : req.body.apellido_materno;
      genero            : req.body.genero;
      foto              : req.body.foto;
      fecha_nacimiento  : req.body.fecha_nacimiento;
      password          : req.body.password;
      fecha_alta        : req.body.fecha_alta;
      rol_k             : req.body.rol_k;

  		usuario.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(usuario);
        console.log(usuario);
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
  		})
  	});
  }


 paginator  = function(req , res ){
    function printStudents(pageNumber, nPerPage) {
   print("Page: " + pageNumber);
   db.students.find().skip((pageNumber-1)*nPerPage).limit(nPerPage).forEach( function(student) { print(student.name + "<p>"); } );
    }
 } 


  //Link routes and functions
  app.get('/usuarios', findAllUsers);
  app.get('/usuarios/:id', findById);
  app.post('/usuarios', addUser);
  app.put('/usuarios/:id', updateUser);
  app.delete('/usuarios/:id', deleteUsuario);

}