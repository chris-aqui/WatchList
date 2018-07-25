const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

//  make server
const app = express();
//
app.use(bodyParser.urlencoded({
  extended: false
}));
//
app.use(methodOverride('_method'));
//
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
//
app.set('view engine', 'handlebars');
//
const PORT = 3000;
app.listen(PORT);

//  make mySQL connection

const connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'kghost',
  database: 'movie_planner_DB'
});

//  connect to DB
connection.connect(function(err){
  if(err) throw err;
  console.log('Connect as id: '+ connection.threadId);
});


// POST
app.get('/', function(req, res){
  connection.query('SELECT * FROM movies;', function(err, data){
    res.render('index',{movies:data});
  });
})
