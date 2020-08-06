"use strict";

const mongoose = require('mongoose');

const NoticiaSchema = mongoose.Schema(
  {
    titulo: String,
    conteudo: String,
  }, 
  { timestamps: true }
);

module.exports = mongoose.model('Noticia', NoticiaSchema);
