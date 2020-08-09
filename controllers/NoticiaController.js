"use strict";

const Service = require('../services/NoticiaService');
const noticiaService = new Service();

class NoticiaController {
  create(req, res) {
    noticiaService.create(req.body)
                  .then(noticia => res.json(noticia))
                  .catch(err => res.status(500).send({ message: err.message }));
  };

  findAll(req, res) {
    noticiaService.findAll()
           .then(noticias => res.send(noticias))
           .catch(err => res.status(500).send({ message: err.message }))
  };

  findOne(req, res) {
    noticiaService.findOne(req.params)
           .then(noticia => noticia ? res.send(noticia) : 
                                      res.status(404).send({ message: "Noticia não encontrada!"}))
           .catch(err => res.status(err.status).send({ message: err.message }))
  };

  update(req, res) {
    noticiaService.update(req.params.id, req.body)
                  .then(noticia => res.send(noticia))
                  .catch(err => res.status(err.status).send({ message: err.message }));
  };

  remove(req, res) {
    noticiaService.remove(req.params)
                  .then(noticia => res.send(noticia))
                  .catch(err => res.status(err.status).send({ message: err.message }));
  };
}

module.exports = NoticiaController;