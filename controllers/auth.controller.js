const Advert = require('../models/User.model');
const bcrypt = require('bcrypt');
const getImageFileType = require('../utils/getImageFileType.js');
const fs = require('fs');

exports.register = async(req, res) => {
    try {

    const { login, password } = req.body;
    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';

    if (login && typeof login === 'string' && password && typeof password === 'string' && req.file && ['image/png', 'image/jpeg', 'image/gif'].includes(fileType)) {
        const userWithLogin = await Advert.findOne({ login });
        if (userWithLogin) {
           return res.status(409).send({ message: 'User with this login already exists' });
        }

        const user = new Advert ({ login, password: await bcrypt.hash(password, 10), avatar: req.file.filename });
        res.status(201).send({ message: 'User created' + user.login});
      } else {
        res.status(400).send ({ message: 'Bad request' });
      }

  } catch (err) {
    res.status(500).send({ message:err.message});
  }
}

exports.login = async(req, res) => {
    try {
        const { login, password } = req.body;

        if ( login && typeof login === 'string' && password && typeof password === 'string') {
            const user = await Advert.findOne({ login });
            if (!user) {
                res.status(400).send('Login or password are incorrect');
            }
            else {
                if (bcrypt.compareSync(password, user.password)) {
                    req.session.login = user.login;
                    res.status(200).send({ message: 'Login successful'});
                }
                else {
                    res.status(400).send({ message: 'Login or password are incorrect' });
                }
            }
        }  else {
            res.status(400).send({ message: 'Bad request' });
          }
        
    }  catch (err) {
        res.status(500).send ({ message: err.message });
    }
}

exports.getUser = async (req, res) => {
    res.send('Yeah! I\'m logged');
}