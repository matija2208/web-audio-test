async function load()
{
    try
    {
        let t = (await axios.get("/api/songs")).data.pesme;
        let x=``;

        t.forEach(element => {
            x+=`<p onclick="ucitaj('${element.nazivFajla}')">${element.naziv}<\p><br>`;
        });
        document.getElementById("container").innerHTML=x;
    }
    catch(err)
    {
        console.log(err);
    }
}