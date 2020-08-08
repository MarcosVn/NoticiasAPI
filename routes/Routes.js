"use strict";

const express = require("express");
const router = express.Router();
const NoticiaController = require('../controllers/NoticiaController');
const UserController = require('../controllers/UserController');

const noticiaCtrl = new NoticiaController();
const userCtrl = new UserController();

router.post('/register', userCtrl.create);
router.post('/login', userCtrl.login);

router.get('/noticia/:id', userCtrl.verifyJWT, noticiaCtrl.findOne);
router.get('/noticias', userCtrl.verifyJWT, noticiaCtrl.findAll);

router.post('/noticia', userCtrl.verifyJWT, noticiaCtrl.create);
router.put('/noticia/:id', userCtrl.verifyJWT, noticiaCtrl.update);
router.delete('/noticia/:id', userCtrl.verifyJWT, noticiaCtrl.remove);

module.exports = router;