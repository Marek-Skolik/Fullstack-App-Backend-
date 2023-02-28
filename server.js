const express = require('express');
const mongoose = require('mongoose');
const app = express();

const usersRoutes = require('./routes/users.routes.js');
const adsRoutes = require('./routes/ads.routes.js');
const authRoutes = require('./routes/auth.routes.js');

app.use('/api', usersRoutes);
app.use('/api', adsRoutes);
app.use('/auth', authRoutes);

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
})

mongoose.connect('mongodb://localhost:27017/adDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});