const mg = require("mongoose");

const PlaylistSchema = new mg.Schema({
    naziv:{
        type:String,
        trim:true,
        require:true
    },
    pesme:[{
        type:String,
        trim:true,
        require:true
    }]
})

module.exports = mg.model("playlist",PlaylistSchema);