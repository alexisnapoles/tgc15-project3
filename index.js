const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

require('dotenv').config();


// express instance
let app = express();

// view engine
app.set('view engine', 'hbs');

// static folder
app.use(express.static('public'));

// setting up wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// enable forms
app.use(
    express.urlencoded({
        extended: false
    })
);

// importing specific routes
const landingPage = require('./routes/landing');
// const aboutPage = require('./routes/landing');

async function main() {
    app.get('/', landingPage);
    app.get('/about', landingPage);
    app.get('/contact', landingPage);
};
main();

// setting up PORT
const PORT = process.env.PORT || 3000

// server
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});