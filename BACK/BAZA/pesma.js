const mg = require("mongoose");

const PesmaSchema = new mg.Schema({
    naziv:{
        type:String,
        trim:true,
        require:true
    },
    nazivFajla:{
        type:String,
        trim:true,
        require:true
    }
})

module.exports = mg.model("pesma",PesmaSchema);