"use strict";

const Service = require('../services/UserService');
const userService = new Service();

class UserController {
  create(req, res) {
    userService.create(req.body)
        .then(usuario => res.json(usuario))
        .catch(err => res.status(err.status).send({ message: err.message }));
  }

  login(req, res) {
    userService.authenticate(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(err.status).send({ message: err.message }));
  }

  verifyJWT(req, res, next) {
    userService.verifyToken(req, res, next);
  }
}

module.exports = UserController;