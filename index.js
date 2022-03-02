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

async function main() {
    app.get('/', (req, res) => {
        res.send('You forgot me! Now it will work! HA HA!');
    });
};
main();

// setting up PORT
const PORT = process.env.PORT || 3000

// server
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});