"use strict";

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../configurations/Application');
const Usuario = require('../models/Usuario');

class UserService {
  async authenticate({ usuario, senha }) {
    const user = await Usuario.findOne({ usuario });

    if (user && bcrypt.compareSync(senha, user.senha)) {
      const token = jwt.sign({ sub: user.id }, process.env.SECRET, { expiresIn: 6000 });
      return { auth: true, token: token };
    }

    throw {status: 401, message: 'Usuário ou senha inválidos!'};
  };

  async create(params) {
    if(await Usuario.findOne({ usuario: params.usuario })) {
      throw {status: 409, message: 'Usuário já existe!'};
    }
      
    const user = new Usuario(params);
    user.senha = bcrypt.hashSync(user.senha);

    return await user.save();
  };

  verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    const secret = process.env.SECRET || config.secret;
    
    if (!token) {
      return res.status(401)
                .send({ auth: false,  message: 'Token não fornecido!' });
    }
      
    jwt.verify(token, secret, function(err, decoded) {
      if (err)
        return res.status(403)
                  .send({ auth: false, message: 'Token inválido!' });
      
      req.userId = decoded.id;
      next();
    });
  }
}

module.exports = UserService;