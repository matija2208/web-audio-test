const express = require("express");
const cors = require("cors");
const baza = require("./BAZA/baza");
const multer = require("multer");
const upload = multer({ dest: '../PESME/' })

const app = express();
app.use(cors());
app.use(JSON());
const port = 80;

app.use(express.static("../FRONT"));

app.listen(port,function(){
    console.log("SERVER slusa na PORTU: 80");
})

baza();

app.post("/api/song/",upload.single('audio'),function(req,res,next){
    const file = req.file;
    
    res.send(req);
})