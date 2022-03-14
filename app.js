const express = require('express');
var hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials', function (err) { });
// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        description: 'This is the home page'
    });
});

//Servir contenido dinamico.
app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Generic',
        description: 'This is the home page'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Elements',
        description: 'This is the home page'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Aplicación lista en http://localhost:${port}/`);
});
