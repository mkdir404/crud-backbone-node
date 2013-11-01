var express = require('express'),
	app = express(),
	http = require('http'),
	path = require('path'),
	server = http.createServer(app),
	mongoose = require('mongoose');

app.configure(function(){

	/*  Configuramos el server para el REST(Post , Get , etc)*/

	/*Permite que pueda parsear json */
	app.use(express.bodyParser());
		
	/*implementar y personalizar HTTP : reemplaza los metodos de los verbos de php*/
	app.use(express.methodOverride());

	/*crear rutas personalizadas*/
	app.use(app.router);

	/*Apunta a la parte*/

	app.use(express['static'](path.join(__dirname,'public')));


});

/*routes = require('./routes/tvshows')(app);*/
routes = require('./routes/usuarios')(app);

mongoose.connect('mongodb://localhost/otherdb', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

server.listen(8888,function(){
	console.log('Node server running on http://localhots:8888');
});

