const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require("body-parser");

const path = require("path");




const cors = require("cors");



const corsOptions = {

  origin: "*",

  methods: ["GET", "POST"],

};


app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {

  res.send('Hello, World!');

});


app.listen(port, () => {

  console.log(`Server is running on http://localhost:${port}`);

});
