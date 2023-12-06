const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User')

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash,
          role: 'user'
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

exports.login = (req, res, next) => {
   User.findOne({ email: req.body.email })
       .then(user => {
           if (!user) {
               return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
           }
           bcrypt.compare(req.body.password, user.password)
               .then(valid => {
                   if (!valid) {
                       return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                   }
                   res.status(200).json({
                       userId: user._id,
                       role: user.role,
                       token: jwt.sign(
                         { userId: user._id, role: user.role },
                         'RANDOM_TOKEN_SECRET',
                         { expiresIn: '24h' }
                     )
                   });
               })
               .catch(error => res.status(500).json({ error }));
       })
       .catch(error => res.status(500).json({ error }));
};

exports.modifyUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
      .then(hash => {
          const updatedUser = {
              email: req.body.email,
              password: hash,
              role: req.body.role
          };

          User.updateOne({ _id: req.params.id }, updatedUser)
              .then(() => res.status(200).json({ message: 'Utilisateur modifié !' }))
              .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

 exports.getAllUser = (req, res, next) => {
  User.find().then(
    (user) => {
      res.status(200).json(user);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
