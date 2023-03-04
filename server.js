const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');


const usersRoutes = require('./routes/users.routes.js');
const adsRoutes = require('./routes/ads.routes.js');
const authRoutes = require('./routes/auth.routes.js');


mongoose.connect('mongodb+srv://NewUser:Marek12344321@cluster1.zgpws1w.mongodb.net/adDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));


if(process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );
}


app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, "/client/build")));
app.use(express.urlencoded({ extended: false }));
app.use(session({ 
  secret: 'xyz',
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://NewUser:Marek12344321@cluster1.zgpws1w.mongodb.net/adDB?retryWrites=true&w=majority',
    collection: 'sessions',
  }), 
  resave: false, 
  saveUninitialized: false,
  cookie: {secure: process.env.NODE_ENV == 'production',} 
}));


app.use('/api', usersRoutes);
app.use('/api', adsRoutes);
app.use('/auth', authRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(process.env.PORT || 8000, (req, res) => {
  console.log('Server is running on port: 8000');
});