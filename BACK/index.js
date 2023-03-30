const express = require("express");
const cors = require("cors");
const path = require("path");
const baza = require("./BAZA/baza");
const pesma = require("./BAZA/pesma");
const multer = require("multer");

const upload = multer({ 
    dest: '../PESME/',
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

app.use(express.static("../FRONT"));

app.listen(port,function(){
    console.log("SERVER slusa na PORTU: 80");
})

baza();

app.post("/api/song/"/*,upload.single('audio')*/,async function(req,res){
    try
    {
        const file = req.files;
        console.log(file);
        // const p = new pesma({
        //     naziv:file.originalname,
        //     nazivFajla:file.filename
        // })
        // await p.save();
        
    }
    catch(err)
    {
        console.log(err);
        res.send({
            uspesnost:false,
            poruka:err
        })
    }
})

app.get("/api/songs",async function(req,res){
    try{
        let songs = await pesma.find();
        res.json({
            uspesnost:true,
            pesme:songs
        })
    }
    catch(err)
    {
        console.log(err);
        res.send({
            uspesnost:false,
            poruka:err
        })
    }
})