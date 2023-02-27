const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const app = express();

const usersRoutes = require('./routes/users.routes.js');
const adsRoutes = require('./routes/ads.routes.js');
const authRoutes = require('./routes/auth.routes.js');

app.use('/api', usersRoutes);
app.use('/api', adsRoutes);
app.use('/auth', authRoutes);

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

mongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log('Successfully connected to the database');
    const db = client.db('adDB');

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use((req, res) => {
      res.status(404).send({ message: 'Not found...' });
    })
  }
});

module.exports = server;