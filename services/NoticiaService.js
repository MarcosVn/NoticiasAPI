"use strict";

const Noticia = require('../models/Noticia');
const ObjectId = require('mongoose').Types.ObjectId;

class NoticiaService {
  async create(params) {
    const noticia = new Noticia(params);
    return await noticia.save();
  };

  async findAll() {
    return await Noticia.find();
  };

  async findOne({ id }) {
    if(!ObjectId.isValid(id)) {
      throw { status: 404, message: 'Notícia não existe!' };
    } 

    return await Noticia.findById(id);
  };

  async update(id, params) {
    const noticia = await Noticia.findById(id);

    if(!ObjectId.isValid(id) || !noticia) {
      throw { status: 404, message: 'Notícia não existe!' };
    }

    Object.assign(noticia, params);
    return await noticia.save();
  };

  async remove({ id }) {
    if(!ObjectId.isValid(id)) {
      throw { status: 404, message: 'Notícia não existe!' };
    }

    return await Noticia.findByIdAndRemove(id);
  };
}

module.exports = NoticiaService;


