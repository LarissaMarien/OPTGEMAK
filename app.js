//express toevoegen aan node
const express = require('express');
const app = express();

//request toevoegen aan node
var request = require('request');

//bib inladen om paden te maken naar folder
const path = require ('path');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

//app naar port laten luisteren
app.listen(port);

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

app.get('/toiletten/:toiletid', function(req, res){
  res.render('detail', {
    toilet: data_toiletten[req.params.toiletid]
  });
});

app.get('/map', function(req, res){
  res.render('map', {
    toiletten: data_toiletten
  });
});

app.get('/lijst', function(req, res){
  res.render('lijst', {
    toiletten: data_toiletten
  });
});

app.get('/toiletdetail/:toiletid', function(req, res){
  res.render('detail', {
    toilet: data_toiletten[req.params.toiletid]
  });
});

request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/8/query?where=1%3D1&outFields=OBJECTID,ID,OBDD,CATEGORIE,PUBLICEREN,PRIORITAIR,OMSCHRIJVING,EXTRA_INFO_PUBLIEK,VRIJSTAAND,TYPE,STADSEIGENDOM,BETALEND,STRAAT,HUISNUMMER,POSTCODE,DISTRICT,BEHEERDER,CONTACTPERSOON,CONTACTGEGEVENS,VERMELDING,DOELGROEP,INTEGRAAL_TOEGANKELIJK,GESCREEND,LUIERTAFEL,OPENINGSUREN_OPM,OPM_INTERN,LAT,LONG,X_COORD,Y_COORD,SHAPE&outSR=4326&f=json',
  function(error, response, body){
    data_toiletten = JSON.parse(body);
    data_toiletten = data_toiletten.features;

  }
);
