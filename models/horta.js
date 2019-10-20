const mongoose = require('mongoose');


const hortaSchemas = mongoose.Schema({
    umidadeDoSolo: String,
    temperaturaDoAr: Number,
    umidade: Number,
    date: Date,
});

module.exports = mongoose.model('hortaModel', hortaSchemas);