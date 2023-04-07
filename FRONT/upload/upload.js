async function save()
{
    try
    {
        let g = (await axios.get("http://localhost/api/songs")).data.pesme;

        let formData = new FormData();
        let files = document.getElementById("file").files;
        console.log(g);
        for(let i =0;i<files.length;i++)
        {
            let l=false;
            for(let j =0; j<g.length;j++)
            {
                if(g[j].naziv===files[i].name)
                {
                    l=true;
                }
            }
            if(!l)
            {
                var audio = files[i];
                console.log(audio);
                formData.append('audio',audio);
            }
            
        }
        
        console.log(formData);
        let t = await axios.post('http://localhost/upload/upload.html/',formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(t);
        if(t.data.uspesnost==true)
        {
            location.href="/"
        }
        else
        {
            alert(t.data.poruka);
        }
    }
    catch(err)
    {
        console.log(err);
    }
    

}