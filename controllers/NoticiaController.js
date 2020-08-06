"use strict";

const Noticia = require('../models/Noticia');

class NoticiaController {

  create(req, res) {
    const noticia = new Noticia({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo,
    });

    noticia.save().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message
      });
    })
  };

  findAll(req, res) {
    Noticia.find().select('-__v')
      .then(noticias => {
        res.send(noticias);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message
        });
      })
  };

  findOne(req, res) {
    const { id } = req.params;

    Noticia.findById(id).select('-__v')
      .then(noticia => {
        res.send(noticia);
      }).catch(err => {
        return res.status(500).send({
          message: err.message
        })
      })
  };

  update(req, res) {
    const { id } = req.params;
    const { titulo, conteudo } = req.body;

    Noticia.findByIdAndUpdate(id, {
      titulo: titulo, 
      conteudo: conteudo
    }, { new: true }).then(noticia => {
      res.send(noticia);
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    });
  };

  remove(req, res) {
    const { id } = req.params;

    Noticia.findByIdAndRemove(id).then(noticia => {
      res.send(noticia);
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    });
  };
}

module.exports = NoticiaController;