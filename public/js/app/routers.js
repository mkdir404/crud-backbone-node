define(['usuarios/views/list','usuarios/model/model'], function(ProjectListView,ModelUsers){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'users'   : 'showUsers',
      'add-user':'addUser',

      // Default
      '*actions': 'defaultAction'
    },

    showProjects : function(){

      var projectListView = new ProjectListView();
          projectListView.render();

      //console.log(ProjectListView);
      
    },
    showUsers : function(){
     
    },

    addUser : function(){

    modelUsers =  new ModelUsers;
    var currentDate = new Date();

    modelUsers.save(
  {
    "nombre": "Garrison",
    "username": "Brock",
    "email": "In.mi@erosnectellus.co.uk",
    "apellido_paterno": "Burris, Uriah Q.",
    "apellido_materno": "Peterson, Debra F.",
    " rol_k": 2
  },
  {
    "nombre": "Alec",
    "username": "Roman",
    "email": "vel.mauris.Integer@Phasellusdolorelit.edu",
    "apellido_paterno": "Gonzales, Glenna D.",
    "apellido_materno": "Greer, Aline W.",
    " rol_k": 4
  },
  {
    "nombre": "Drake",
    "username": "Buchanan",
    "email": "Nunc.commodo.auctor@feugiat.co.uk",
    "apellido_paterno": "Mendez, Zachery V.",
    "apellido_materno": "Pratt, Timon L.",
    " rol_k": 1
  },
  {
    "nombre": "Honorato",
    "username": "Morris",
    "email": "est.ac@massaInteger.org",
    "apellido_paterno": "Maddox, Chiquita N.",
    "apellido_materno": "Travis, Kirby R.",
    " rol_k": 3
  },
  {
    "nombre": "David",
    "username": "Levy",
    "email": "ut@dolorQuisque.com",
    "apellido_paterno": "Giles, Simone D.",
    "apellido_materno": "Weeks, Shannon Z.",
    " rol_k": 4
  },
  {
    "nombre": "Mufutau",
    "username": "Haynes",
    "email": "enim.Mauris.quis@nibh.ca",
    "apellido_paterno": "Hodge, Jessamine C.",
    "apellido_materno": "Wolf, Miranda Q.",
    " rol_k": 2
  },
  {
    "nombre": "Tarik",
    "username": "Fitzgerald",
    "email": "enim.Mauris.quis@eratEtiamvestibulum.net",
    "apellido_paterno": "Bauer, Jayme Z.",
    "apellido_materno": "Harper, Freya D.",
    " rol_k": 1
  },
  {
    "nombre": "Evan",
    "username": "Bradford",
    "email": "Fusce.dolor.quam@scelerisqueneque.com",
    "apellido_paterno": "Carpenter, Kenyon V.",
    "apellido_materno": "Maxwell, Alana Y.",
    " rol_k": 4
  },
  {
    "nombre": "Kane",
    "username": "May",
    "email": "tempor.bibendum.Donec@blanditcongueIn.ca",
    "apellido_paterno": "Reynolds, Nadine I.",
    "apellido_materno": "Sanchez, Candace H.",
    " rol_k": 3
  },
  {
    "nombre": "Chase",
    "username": "Holloway",
    "email": "rutrum.justo.Praesent@justosit.ca",
    "apellido_paterno": "Hutchinson, Alan U.",
    "apellido_materno": "Mcneil, Kylee Q.",
    " rol_k": 3
  },
  {
    "nombre": "Castor",
    "username": "Malone",
    "email": "blandit@nonummy.com",
    "apellido_paterno": "Warren, Zeus U.",
    "apellido_materno": "Pate, Moses C.",
    " rol_k": 5
  },
  {
    "nombre": "Jeremy",
    "username": "Henderson",
    "email": "nulla@liberoduinec.com",
    "apellido_paterno": "Mclean, Guinevere W.",
    "apellido_materno": "Berry, Hayes Q.",
    " rol_k": 5
  },
  {
    "nombre": "Maxwell",
    "username": "Donaldson",
    "email": "blandit.Nam@Inatpede.ca",
    "apellido_paterno": "Ashley, Veronica U.",
    "apellido_materno": "Whitley, Veda O.",
    " rol_k": 4
  },
  {
    "nombre": "Marvin",
    "username": "Navarro",
    "email": "Phasellus.in@libero.co.uk",
    "apellido_paterno": "Rogers, Tiger E.",
    "apellido_materno": "Harris, Drake A.",
    " rol_k": 4
  },
  {
    "nombre": "Holmes",
    "username": "Morris",
    "email": "Donec.est@elementumsemvitae.edu",
    "apellido_paterno": "Whitley, Nathaniel P.",
    "apellido_materno": "Woodard, Maile J.",
    " rol_k": 3
  },
  {
    "nombre": "Walter",
    "username": "Waller",
    "email": "tellus@idsapien.net",
    "apellido_paterno": "Higgins, Melissa S.",
    "apellido_materno": "Craig, Lance X.",
    " rol_k": 5
  },
  {
    "nombre": "Kyle",
    "username": "Tyson",
    "email": "Pellentesque.habitant@vitaeodio.com",
    "apellido_paterno": "Ferguson, Ishmael F.",
    "apellido_materno": "Dorsey, Burton U.",
    " rol_k": 4
  },
  {
    "nombre": "Conan",
    "username": "Clemons",
    "email": "ut@eu.net",
    "apellido_paterno": "Cantrell, Noelani Q.",
    "apellido_materno": "Marks, Hall I.",
    " rol_k": 5
  },
  {
    "nombre": "Plato",
    "username": "Dickerson",
    "email": "nisi.Mauris.nulla@pede.org",
    "apellido_paterno": "Hood, Nigel Q.",
    "apellido_materno": "Perry, Calvin V.",
    " rol_k": 2
  },
  {
    "nombre": "Wyatt",
    "username": "Moreno",
    "email": "vel@nequeNullamnisl.org",
    "apellido_paterno": "Terry, Victor F.",
    "apellido_materno": "Barker, Martin V.",
    " rol_k": 1
  },
  {
    "nombre": "Knox",
    "username": "Charles",
    "email": "tristique.ac.eleifend@nuncinterdum.net",
    "apellido_paterno": "Black, Kirsten E.",
    "apellido_materno": "Knox, Desirae V.",
    " rol_k": 3
  },
  {
    "nombre": "Colton",
    "username": "Mueller",
    "email": "amet.lorem.semper@interdum.org",
    "apellido_paterno": "Case, Branden U.",
    "apellido_materno": "Bauer, Amy Z.",
    " rol_k": 4
  },
  {
    "nombre": "Barrett",
    "username": "Ruiz",
    "email": "mus.Donec.dignissim@nislNullaeu.edu",
    "apellido_paterno": "Huffman, Hakeem U.",
    "apellido_materno": "Leblanc, Uta Z.",
    " rol_k": 1
  },
  {
    "nombre": "Allen",
    "username": "Robinson",
    "email": "Mauris.ut@nectellus.org",
    "apellido_paterno": "Best, Omar W.",
    "apellido_materno": "Davenport, Serina Q.",
    " rol_k": 5
  },
  {
    "nombre": "Dean",
    "username": "Mitchell",
    "email": "felis.ullamcorper@diamDuis.edu",
    "apellido_paterno": "Adams, Henry C.",
    "apellido_materno": "Humphrey, Quintessa X.",
    " rol_k": 4
  },
  {
    "nombre": "Zachary",
    "username": "Solis",
    "email": "massa.rutrum.magna@sagittisfelis.com",
    "apellido_paterno": "Rosario, Aubrey T.",
    "apellido_materno": "Spence, Richard Q.",
    " rol_k": 4
  },
  {
    "nombre": "Barry",
    "username": "Estrada",
    "email": "viverra.Maecenas@loremvitaeodio.net",
    "apellido_paterno": "Hopper, Gabriel T.",
    "apellido_materno": "Horton, Orlando W.",
    " rol_k": 3
  },
  {
    "nombre": "Timothy",
    "username": "Ratliff",
    "email": "lacus@Innec.co.uk",
    "apellido_paterno": "Mccall, Deborah F.",
    "apellido_materno": "Hahn, Forrest Z.",
    " rol_k": 1
  },
  {
    "nombre": "Craig",
    "username": "Mcfadden",
    "email": "sociis.natoque.penatibus@mienimcondimentum.net",
    "apellido_paterno": "Horn, Quinn K.",
    "apellido_materno": "Summers, Bevis E.",
    " rol_k": 5
  },
  {
    "nombre": "Emerson",
    "username": "Barnes",
    "email": "Duis.sit@PraesentluctusCurabitur.edu",
    "apellido_paterno": "Mooney, Hilary B.",
    "apellido_materno": "Curry, Maxwell G.",
    " rol_k": 5
  },
  {
    "nombre": "Kibo",
    "username": "Dalton",
    "email": "a@egetmollislectus.edu",
    "apellido_paterno": "Cooley, Moana V.",
    "apellido_materno": "Morris, Ivana G.",
    " rol_k": 3
  },
  {
    "nombre": "Joel",
    "username": "Holcomb",
    "email": "nulla.magna@cubiliaCurae.edu",
    "apellido_paterno": "Farrell, Derek F.",
    "apellido_materno": "Valenzuela, Melissa G.",
    " rol_k": 2
  },
  {
    "nombre": "Brett",
    "username": "Lara",
    "email": "arcu@massaSuspendisseeleifend.ca",
    "apellido_paterno": "Foley, Kirby S.",
    "apellido_materno": "Kim, Dai O.",
    " rol_k": 4
  },
  {
    "nombre": "Buckminster",
    "username": "Salinas",
    "email": "Curabitur@convallis.ca",
    "apellido_paterno": "Goodman, Noble Q.",
    "apellido_materno": "Molina, Xena W.",
    " rol_k": 4
  },
  {
    "nombre": "Julian",
    "username": "Byrd",
    "email": "dis.parturient.montes@dictumplacerat.org",
    "apellido_paterno": "Newton, Hayes Y.",
    "apellido_materno": "White, Vivien R.",
    " rol_k": 1
  },
  {
    "nombre": "Honorato",
    "username": "Davenport",
    "email": "tellus.justo.sit@aliquam.com",
    "apellido_paterno": "Park, Dorian V.",
    "apellido_materno": "Beard, Yuri L.",
    " rol_k": 5
  },
  {
    "nombre": "Micah",
    "username": "Franks",
    "email": "Phasellus.ornare@anteiaculis.co.uk",
    "apellido_paterno": "Rosales, Baker I.",
    "apellido_materno": "Hull, Jeremy H.",
    " rol_k": 3
  },
  {
    "nombre": "Hakeem",
    "username": "Waters",
    "email": "ultricies.adipiscing@bibendum.org",
    "apellido_paterno": "Lawson, Clark T.",
    "apellido_materno": "Davis, Jeremy P.",
    " rol_k": 3
  },
  {
    "nombre": "Denton",
    "username": "Ball",
    "email": "libero.Proin@dolorsit.com",
    "apellido_paterno": "Lopez, Ralph D.",
    "apellido_materno": "Gibson, Sonya L.",
    " rol_k": 2
  },
  {
    "nombre": "Rajah",
    "username": "Peck",
    "email": "elit.Nulla.facilisi@acrisus.edu",
    "apellido_paterno": "Ross, Sasha P.",
    "apellido_materno": "Gaines, Allistair J.",
    " rol_k": 3
  },
  {
    "nombre": "Julian",
    "username": "Wall",
    "email": "ultrices.mauris.ipsum@velitQuisquevarius.net",
    "apellido_paterno": "Hardy, Eve Z.",
    "apellido_materno": "Vinson, Barclay C.",
    " rol_k": 5
  },
  {
    "nombre": "Darius",
    "username": "Lowery",
    "email": "dapibus@orci.com",
    "apellido_paterno": "Herman, Uriah J.",
    "apellido_materno": "Craig, Phyllis Y.",
    " rol_k": 4
  },
  {
    "nombre": "Jin",
    "username": "Francis",
    "email": "nisi@tempus.co.uk",
    "apellido_paterno": "Newman, Cleo S.",
    "apellido_materno": "Bauer, Karly R.",
    " rol_k": 4
  },
  {
    "nombre": "Yasir",
    "username": "Rush",
    "email": "at.velit@scelerisqueneque.com",
    "apellido_paterno": "Valenzuela, Lucius P.",
    "apellido_materno": "Garrett, Kellie Y.",
    " rol_k": 2
  },
  {
    "nombre": "Jordan",
    "username": "Tran",
    "email": "et@velit.edu",
    "apellido_paterno": "Nelson, Jack B.",
    "apellido_materno": "Garcia, Mechelle T.",
    " rol_k": 1
  },
  {
    "nombre": "Gage",
    "username": "Holland",
    "email": "euismod.urna.Nullam@ligula.ca",
    "apellido_paterno": "Conway, Leigh X.",
    "apellido_materno": "Buckley, Cheyenne M.",
    " rol_k": 4
  },
  {
    "nombre": "Hayden",
    "username": "Hopkins",
    "email": "imperdiet@ipsumnon.edu",
    "apellido_paterno": "Jones, Kitra E.",
    "apellido_materno": "Cardenas, Adam G.",
    " rol_k": 4
  },
  {
    "nombre": "Hoyt",
    "username": "Wilkins",
    "email": "erat.neque.non@erateget.com",
    "apellido_paterno": "Wheeler, Maris U.",
    "apellido_materno": "Castro, Cynthia S.",
    " rol_k": 3
  },
  {
    "nombre": "Deacon",
    "username": "Cox",
    "email": "vel@atsem.net",
    "apellido_paterno": "Dunn, Zeph T.",
    "apellido_materno": "Preston, Kimberley Y.",
    " rol_k": 3
  },
  {
    "nombre": "Talon",
    "username": "Castaneda",
    "email": "dignissim@habitant.com",
    "apellido_paterno": "Olsen, Kelsey K.",
    "apellido_materno": "Morris, Chadwick F.",
    " rol_k": 3
  },
  {
    "nombre": "Rashad",
    "username": "Valdez",
    "email": "ut.nisi.a@nec.net",
    "apellido_paterno": "Campos, Quincy M.",
    "apellido_materno": "Hatfield, Price F.",
    " rol_k": 2
  },
  {
    "nombre": "Brock",
    "username": "Carr",
    "email": "sapien.gravida.non@orci.org",
    "apellido_paterno": "Casey, Indira O.",
    "apellido_materno": "Shepard, Xanthus Y.",
    " rol_k": 1
  },
  {
    "nombre": "Isaac",
    "username": "Case",
    "email": "adipiscing.Mauris@dapibus.org",
    "apellido_paterno": "Good, Charlotte D.",
    "apellido_materno": "Keith, Willa Q.",
    " rol_k": 4
  },
  {
    "nombre": "Tarik",
    "username": "Snow",
    "email": "vestibulum@laoreet.edu",
    "apellido_paterno": "Wooten, Evan K.",
    "apellido_materno": "Carey, Pamela Z.",
    " rol_k": 4
  },
  {
    "nombre": "Yoshio",
    "username": "Velasquez",
    "email": "sodales.nisi.magna@egestas.net",
    "apellido_paterno": "Robertson, Caleb C.",
    "apellido_materno": "Caldwell, Fulton G.",
    " rol_k": 2
  },
  {
    "nombre": "Leonard",
    "username": "Tillman",
    "email": "Donec@risusNullaeget.ca",
    "apellido_paterno": "Wade, Preston O.",
    "apellido_materno": "Vasquez, Arsenio Z.",
    " rol_k": 5
  },
  {
    "nombre": "Armando",
    "username": "Weber",
    "email": "et.pede@MaurisnullaInteger.ca",
    "apellido_paterno": "Roach, Wing G.",
    "apellido_materno": "Maldonado, Bianca J.",
    " rol_k": 3
  },
  {
    "nombre": "Michael",
    "username": "Morse",
    "email": "feugiat.nec.diam@tinciduntDonec.net",
    "apellido_paterno": "Richmond, Erich J.",
    "apellido_materno": "Palmer, Ariel Y.",
    " rol_k": 1
  },
  {
    "nombre": "Leonard",
    "username": "Tyson",
    "email": "magna.a.tortor@elementumduiquis.net",
    "apellido_paterno": "Shaffer, Patrick G.",
    "apellido_materno": "Mcneil, Nicholas N.",
    " rol_k": 5
  },
  {
    "nombre": "Callum",
    "username": "Terry",
    "email": "Nullam@Morbineque.com",
    "apellido_paterno": "Payne, Baxter Z.",
    "apellido_materno": "Jordan, Hedy I.",
    " rol_k": 3
  },
  {
    "nombre": "Castor",
    "username": "English",
    "email": "eu.lacus@Cras.org",
    "apellido_paterno": "Yates, Amery F.",
    "apellido_materno": "Sears, Reece M.",
    " rol_k": 3
  },
  {
    "nombre": "Harrison",
    "username": "Wolfe",
    "email": "in@blanditmattisCras.org",
    "apellido_paterno": "Levine, Iliana Q.",
    "apellido_materno": "Donaldson, Karly Q.",
    " rol_k": 5
  },
  {
    "nombre": "Nolan",
    "username": "West",
    "email": "id.enim@Aliquam.net",
    "apellido_paterno": "Kirk, Honorato F.",
    "apellido_materno": "Kim, Jaime K.",
    " rol_k": 2
  },
  {
    "nombre": "Elton",
    "username": "Sweet",
    "email": "nunc.interdum.feugiat@Nuncsedorci.org",
    "apellido_paterno": "Mcknight, Phillip V.",
    "apellido_materno": "Cameron, Chaim L.",
    " rol_k": 4
  },
  {
    "nombre": "Gareth",
    "username": "Blair",
    "email": "egestas.a@nec.edu",
    "apellido_paterno": "Watson, Destiny S.",
    "apellido_materno": "Hudson, Mikayla Y.",
    " rol_k": 1
  },
  {
    "nombre": "Walter",
    "username": "Gonzales",
    "email": "ac.arcu@vitae.edu",
    "apellido_paterno": "Cherry, Bradley K.",
    "apellido_materno": "Rivera, Sonya G.",
    " rol_k": 1
  },
  {
    "nombre": "Todd",
    "username": "Park",
    "email": "at.auctor.ullamcorper@sodalesatvelit.org",
    "apellido_paterno": "Garrett, Rogan K.",
    "apellido_materno": "Farmer, Audra D.",
    " rol_k": 4
  },
  {
    "nombre": "Odysseus",
    "username": "Blanchard",
    "email": "dignissim.magna.a@quisdiam.co.uk",
    "apellido_paterno": "Hammond, Mercedes A.",
    "apellido_materno": "Lynn, Rama L.",
    " rol_k": 4
  },
  {
    "nombre": "Elmo",
    "username": "Nicholson",
    "email": "ornare.Fusce.mollis@nequesed.ca",
    "apellido_paterno": "Robbins, Caleb Y.",
    "apellido_materno": "Brooks, Wing J.",
    " rol_k": 1
  },
  {
    "nombre": "Garrett",
    "username": "Kent",
    "email": "ullamcorper.magna.Sed@blanditviverra.net",
    "apellido_paterno": "Vasquez, Aaron T.",
    "apellido_materno": "Forbes, Mercedes U.",
    " rol_k": 3
  },
  {
    "nombre": "Sean",
    "username": "Cooper",
    "email": "odio@consectetueradipiscingelit.org",
    "apellido_paterno": "Curry, Dante Y.",
    "apellido_materno": "Wynn, Hasad W.",
    " rol_k": 2
  },
  {
    "nombre": "Benjamin",
    "username": "Cross",
    "email": "molestie.tellus@eunullaat.ca",
    "apellido_paterno": "Schultz, Eagan K.",
    "apellido_materno": "Quinn, Eagan E.",
    " rol_k": 5
  },
  {
    "nombre": "Amal",
    "username": "Waters",
    "email": "libero.Morbi@Donec.edu",
    "apellido_paterno": "Ewing, Akeem M.",
    "apellido_materno": "Kelly, Denise K.",
    " rol_k": 4
  },
  {
    "nombre": "Isaiah",
    "username": "Fernandez",
    "email": "in.hendrerit.consectetuer@vitaeerat.edu",
    "apellido_paterno": "Levine, Clark R.",
    "apellido_materno": "Graves, Jin B.",
    " rol_k": 4
  },
  {
    "nombre": "Bernard",
    "username": "Dodson",
    "email": "luctus.ipsum.leo@dui.edu",
    "apellido_paterno": "Mckee, Gareth D.",
    "apellido_materno": "Stewart, Gloria P.",
    " rol_k": 4
  },
  {
    "nombre": "Fritz",
    "username": "Alvarez",
    "email": "cursus@eget.org",
    "apellido_paterno": "Merritt, Reed N.",
    "apellido_materno": "Casey, Zeus E.",
    " rol_k": 3
  },
  {
    "nombre": "Jason",
    "username": "Duffy",
    "email": "diam@elitpharetra.net",
    "apellido_paterno": "Bird, Nadine V.",
    "apellido_materno": "Noble, Alexis Y.",
    " rol_k": 2
  },
  {
    "nombre": "Julian",
    "username": "Larson",
    "email": "risus@conubianostra.net",
    "apellido_paterno": "Lane, Savannah F.",
    "apellido_materno": "Campos, Maggie S.",
    " rol_k": 4
  },
  {
    "nombre": "Dolan",
    "username": "Tran",
    "email": "ultricies@ultricies.org",
    "apellido_paterno": "Franks, Maya E.",
    "apellido_materno": "Hampton, Gavin Z.",
    " rol_k": 2
  },
  {
    "nombre": "Amos",
    "username": "Vaughn",
    "email": "suscipit.est.ac@sempertellus.ca",
    "apellido_paterno": "Ayers, Yoshio H.",
    "apellido_materno": "Love, Ross M.",
    " rol_k": 3
  },
  {
    "nombre": "Merrill",
    "username": "Daugherty",
    "email": "leo@enim.net",
    "apellido_paterno": "Landry, Eden F.",
    "apellido_materno": "Schultz, Vivian K.",
    " rol_k": 2
  },
  {
    "nombre": "Christopher",
    "username": "Harper",
    "email": "risus.quis@libero.co.uk",
    "apellido_paterno": "Clements, Plato J.",
    "apellido_materno": "Cox, Palmer R.",
    " rol_k": 3
  },
  {
    "nombre": "Owen",
    "username": "Castillo",
    "email": "varius.orci.in@diamPellentesque.org",
    "apellido_paterno": "Dean, Kadeem F.",
    "apellido_materno": "Ramirez, Reece K.",
    " rol_k": 4
  },
  {
    "nombre": "Keefe",
    "username": "Rosa",
    "email": "eu@Cum.edu",
    "apellido_paterno": "Bradford, Jorden X.",
    "apellido_materno": "Espinoza, Deborah G.",
    " rol_k": 5
  },
  {
    "nombre": "Ignatius",
    "username": "Vargas",
    "email": "in.faucibus@dapibus.ca",
    "apellido_paterno": "Mcleod, Jaime B.",
    "apellido_materno": "Shaw, Wynne H.",
    " rol_k": 4
  },
  {
    "nombre": "Kennedy",
    "username": "Nieves",
    "email": "turpis.non@rutrumeu.co.uk",
    "apellido_paterno": "Cline, Marny Z.",
    "apellido_materno": "Evans, Burke W.",
    " rol_k": 2
  },
  {
    "nombre": "Judah",
    "username": "Burke",
    "email": "erat.Etiam@justo.com",
    "apellido_paterno": "Jennings, Branden X.",
    "apellido_materno": "Bolton, Lance Z.",
    " rol_k": 3
  },
  {
    "nombre": "Tucker",
    "username": "Dunn",
    "email": "ac@Etiamligulatortor.ca",
    "apellido_paterno": "Ferguson, Hayfa P.",
    "apellido_materno": "Hutchinson, Alisa O.",
    " rol_k": 1
  },
  {
    "nombre": "Oliver",
    "username": "Hendrix",
    "email": "mauris.Morbi@acfeugiat.com",
    "apellido_paterno": "Stokes, Kyra O.",
    "apellido_materno": "Goodman, Mollie M.",
    " rol_k": 2
  },
  {
    "nombre": "Harlan",
    "username": "Hull",
    "email": "dignissim.lacus.Aliquam@nequeNullamut.co.uk",
    "apellido_paterno": "Skinner, Marny N.",
    "apellido_materno": "Calderon, Alisa C.",
    " rol_k": 1
  },
  {
    "nombre": "Kirk",
    "username": "Morales",
    "email": "mus@nonummy.ca",
    "apellido_paterno": "Ratliff, Lareina X.",
    "apellido_materno": "Mitchell, Burton M.",
    " rol_k": 5
  },
  {
    "nombre": "Yoshio",
    "username": "Ware",
    "email": "vehicula@Aliquamfringilla.net",
    "apellido_paterno": "Villarreal, Bree P.",
    "apellido_materno": "Roberson, Preston D.",
    " rol_k": 4
  },
  {
    "nombre": "Todd",
    "username": "Cox",
    "email": "et.rutrum.eu@uteratSed.co.uk",
    "apellido_paterno": "Tucker, Tanya L.",
    "apellido_materno": "Neal, Jasper J.",
    " rol_k": 4
  },
  {
    "nombre": "Dillon",
    "username": "Simpson",
    "email": "Morbi.vehicula@necluctusfelis.net",
    "apellido_paterno": "Good, Chester L.",
    "apellido_materno": "Farrell, Evelyn B.",
    " rol_k": 1
  },
  {
    "nombre": "Arden",
    "username": "Collins",
    "email": "Proin.mi.Aliquam@orciluctus.org",
    "apellido_paterno": "Shaffer, Daquan I.",
    "apellido_materno": "Prince, Brynn T.",
    " rol_k": 4
  },
  {
    "nombre": "Grady",
    "username": "Campbell",
    "email": "Vivamus@iaculisquispede.co.uk",
    "apellido_paterno": "Cameron, Raja R.",
    "apellido_materno": "Kaufman, Xena D.",
    " rol_k": 2
  },
  {
    "nombre": "Phillip",
    "username": "Coleman",
    "email": "eget.varius@nondui.net",
    "apellido_paterno": "Watkins, Quyn G.",
    "apellido_materno": "Robertson, Ahmed P.",
    " rol_k": 1
  },
  {
    "nombre": "Jerome",
    "username": "Glass",
    "email": "mattis.ornare.lectus@Sedet.ca",
    "apellido_paterno": "Mclean, Jasmine P.",
    "apellido_materno": "Pruitt, Darrel G.",
    " rol_k": 2
  },
  {
    "nombre": "Colt",
    "username": "Guerra",
    "email": "interdum.libero@etnetus.net",
    "apellido_paterno": "Bernard, Vera Q.",
    "apellido_materno": "Andrews, Nina X.",
    " rol_k": 4
  },
  {
    "nombre": "Ralph",
    "username": "Hutchinson",
    "email": "Donec.sollicitudin.adipiscing@tinciduntduiaugue.com",
    "apellido_paterno": "Mccray, Eliana W.",
    "apellido_materno": "Conley, Piper L.",
    " rol_k": 1
  }
);

    },

    defaultAction:function(){
      
    }
  });

  var initialize = function(){
    var app_router = new AppRouter();
    Backbone.history.start();
  };
  
  return {
    initialize: initialize
  };

});