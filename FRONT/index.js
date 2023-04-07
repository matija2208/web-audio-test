async function load()
{
    try
    {
        document.getElementById("audioplayer").innerHTML="";
        let t = (await axios.get("/api/songs")).data.pesme;
        let x=``;

        t.forEach(element => {
            x+=`<p onclick="ucitaj('${element.nazivFajla}')" style = "width:auto">${element.naziv}<\p>`;
        });
        document.getElementById("container").innerHTML=x;
    }
    catch(err)
    {
        console.log(err);
    }
}

async function brisi()
{
    try
    {
        let t = (await axios.delete("/api/songs")).data;
        if(t.uspesnost==true)
        {
            await load();
        }

        
    }
    catch(err)
    {
        console.log(err);
    }
}

function ucitaj(x)
{
    
    document.getElementById("audioplayer").innerHTML=`<audio controls autoplay><source src="../PESME/${x}" type = "audio/mp3"></audio>`;
}