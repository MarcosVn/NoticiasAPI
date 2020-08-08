"use strict";

const mongoose = require('mongoose');

const NoticiaSchema = mongoose.Schema(
  {
    titulo: { type: String, required: true },
    conteudo: { type: String, required: true },
  }, 
  { timestamps: true },
);

module.exports = mongoose.model('Noticia', NoticiaSchema);
