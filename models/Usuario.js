"use strict";

const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema(
  {
    usuario: { type: String, unique: true, required: true },
    senha: { type: String, required: true }
  }, 
  { timestamps: true },
);

module.exports = mongoose.model('Usuario', UsuarioSchema);