const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const bodyParser = require('body-parser');

const baza = require("./BAZA/baza");
const pesmaF = require("./FUNCTIONS/pesmaF");
const playlist = require("./BAZA/playlist");



const upload = multer({ 
    dest: '../FRONT/PESME/',
    fileFilter:function(req,file,calback){
        let ext = path.extname(file.originalname);
        if(ext != '.mp3'&& ext!='.wav' && ext!='.m4a' && ext!='.FLAC' && ext!='.mp4' && ext!='.wma' && ext!='.AAC' && ext!='.opus')
        {
            return calback(new Error('Only audios are allowed'))
        }
        calback(null, true);
    }
})

const app = express();
app.use(cors());
app.use(express.json());
const port = 80;

app.use(express.static("../FRONT/"));
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port,function(){
    console.log("SERVER slusa na PORTU: 80");
})

baza();

app.post("/upload/upload.html/",upload.array("audio"),pesmaF.post);
app.get("/api/songs",pesmaF.getAll);
app.delete("/api/songs", pesmaF.delAll);