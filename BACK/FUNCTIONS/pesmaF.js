const pesma = require("../BAZA/pesma");

async function deleteAll(req,res){
    try{
        let songs = await pesma.deleteMany();
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
            poruka:err.message
        })
    }
}

async function getAll(req,res){
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
            poruka:err.message
        })
    }
}

async function post(req,res){
    
    try
    {
        const file = req.files;
        console.log(file);
        let g=[];
        for(let i=0;i<file.length;i++)
        {
            const p = new pesma({
                naziv:file[i].originalname,
                nazivFajla:file[i].filename
            })
            let v = await p.save();
            g.push(v.naziv);
        }
        
        
        res.json({
            uspesnost:true,
            sacuvano:g
        })
        
    }
    catch(err)
    {
        console.log(err);
        res.send({
            uspesnost:false,
            poruka:err.message
        })
    }
}

module.exports=new Object({
    delAll:deleteAll,
    getAll:getAll,
    post:post,
})