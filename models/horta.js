const mongoose = require('mongoose');


const hortaSchemas = mongoose.Schema({
    umidadeDoSolo: String,
    temperaturaDoAr: Number,
    umidade: Number,
    date: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('hortaModel', hortaSchemas);