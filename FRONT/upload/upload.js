async function save()
{
    try
    {
        let formData = new FormData();
        var audio = document.getElementById("file").files[0];
        formData.append('audio',audio);
        console.log(formData);
        // let t = await axios.post('/api/song',formData,{
        //     headers:{
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        // location.href="/"
    }
    catch(err)
    {
        console.log(err);
    }
    

}