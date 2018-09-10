const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require('./config/mongoose.js');
require('./models/Item.js')
require('./config/routes.js')(app)
require('./controllers/items.js')

app.listen(5000, function() {
    console.log("listening on port 5000");
})