let checked=[];


async function search()
{
    let text = document.getElementById("search").value.toUpperCase();
    let linije= [];
    let counter=0;
    let pesme = (await axios.get("http://localhost/api/songs")).data.pesme;
    // if(text.lenght>0)
    // {
        console.log(pesme);
        for(let i =0;i<pesme.length;i++)
        {
            if(pesme[i].naziv.toUpperCase().indexOf(text)>-1)
            {
                linije.push([pesme[i],pesme[i].naziv.toUpperCase().indexOf(text)]);
                counter++;
            }
        }

        linije.sort((a,b)=>{
            return a[1]-b[1];
        })
        
        let div=``;
        console.log(linije);
        for(let i=0;i<linije.length;i++)
        {
            console.log(linije[i][0]);
            if(checked.indexOf(linije[i][0]._id)>-1)
            {
                div+=`<input type="checkbox" id="${linije[i][0]._id}" onchange="change(this.id)" checked><label for="${linije[i][0]._id}">${(linije[i][0]).naziv}</label><br>`;
            }
            else
            {
                div+=`<input type="checkbox" id="${linije[i][0]._id}" onchange="change(this.id)"><label for="${linije[i][0]._id}">${(linije[i][0]).naziv}</label><br>`;
            }
            
        }

        document.getElementById("container").innerHTML=div;
        
    //}
}

function change(id)
{
    if(document.getElementById(id).checked)
    {
        checked.push(id);
    }
    else
    {
        checked.splice(checked.indexOf(id),1);
    }
}

function submit()
{
    console.log(checked);
}