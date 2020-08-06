"use strict";

const jwt = require('jsonwebtoken');
const config = require('../configurations/Application');
 
const verifyToken = (req, res, next) => {
  const token = req.headers['x-api-token'];
  const secret = process.env.SECRET || config.secret;

  if (!token)
    return res.status(403)
              .send({
                  auth: false, 
                  message: 'Token não fornecido!' });

  jwt.verify(token, secret, function(err, decoded) {
    if (err)
      return res.status(500)
                .send({ 
                  auth: false, 
                  message: 'Token inválido!' 
                });
    
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;