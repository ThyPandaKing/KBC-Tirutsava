const express = require ('express');
const app = express ();
const cors = require ('cors');
const mongoose = require ('mongoose');
const body_parser = require ('body-parser');
const http = require ('http');

const PORT = 3001;

app.use (body_parser.json ());
app.use (body_parser.urlencoded ());
app.use (cors ());

const server = http.createServer (app);

const question = require ('./routers/question');

app.use ('/', question);

// mongodb URL
const CONNECTION_URL =
  'mongodb+srv://Aditya:Aditya@cluster0.ycupe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// connecting to mongodb database and starting server
mongoose
  .connect (CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then (() => {
    console.log ('Connected to mongo_db');
    server.listen (PORT, () =>
      console.log (`Socket and Server has started on PORT : ${PORT}`)
    );
  })
  .catch (error => console.log (`${error} did not connect`));
