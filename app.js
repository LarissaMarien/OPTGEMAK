//express toevoegen aan node
const express = require('express');
const app = express();

//bib inladen om paden te maken naar folder
const path = require ('path');

//om browser te doen werken = applicatie poort instellen
const port = 3000;

//hiermee kan je de map views mee ophalen met /views
app.set('view engine','ejs');

//hiermee kan je verwijzen naar de map views door enkel een / te zetten en dan je ejs bestand
app.set('views', path.resolve(__dirname, 'views'));

//public map statische maken zodat je kan verwijzen met ./
app.use(express.static('public'));

//route naar homepagina maken
app.get('/', function(req, res){
  res.render('index');
});

//app naar port laten luisteren
app.listen(port);
