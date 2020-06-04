const express = require('express');
const app = express();
const port = 3333;
const bodyParser = require('body-parser');
const TodoRoutes = require('../routes/todo');
const cors = require('./cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors);

app.use('/',TodoRoutes);

app.listen(port,() => {
    console.log("Server is runing on port " + port)
})