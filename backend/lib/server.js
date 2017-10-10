'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const errorMiddleware = require('./error-middleware.js');

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI)

const app = express();

//middleware
app.use(cors());
app.use(morgan('dev'));

//add 404 to all routes
app.all('/api/*', (req, res, next) =>{
  res.sendStatus(404)
})

//error middleware, loaded last
app.use(errorMiddleware);

const server = module.exports = {};
server.isOn = false;

server.start = () => {
  new Promise((resolve, reject) => {
    if(!server.isOn) {
      return server.http = app.listen(process.env.PORT, () => {
        server.isOn = true;
        console.log('server up on port: ', process.env.PORT)
        resolve();
      });
    }
    reject(new Error('server running already'))
  })
}

server.stop = () => {
  new Promise((resolve, reject) => {
    if(server.isOn && server.http) {
      return server.http.close(() => {
        server.isOn = false;
        console.log('server closed')
        resolve()
      })
    }
    reject(new Error('server isn\'t on'))
  })
}
