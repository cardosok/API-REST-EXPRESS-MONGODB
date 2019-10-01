const mongoose = require('mongoose');

const hortaSchemas = mongoose.Schema({
    umidadeDoSolo: {
        type: String
    },
    umidadeDoAr: {
        type: Double
    },
    temperaturaDoAr: {
        type: Double
    },
    nivelTanque:{
        type: String
    }
});

module.exports = mongoose.model('horta', hortaSchemas);