"use strict";

const express = require("express");
const router = express.Router();
const noticiaController = require('../controllers/NoticiaController');

const noticiaCtrl = new noticiaController();

router.get('/noticias', noticiaCtrl.findAll);
router.get('/noticia/:id', noticiaCtrl.findOne);

router.post('/noticia', noticiaCtrl.create);
router.put('/noticia/:id', noticiaCtrl.update);
router.delete('/noticia/:id', noticiaCtrl.remove);

module.exports = router;