// console.log(Math.trunc(6));
// let apikey="hs3A0DJmGqE4Ba8ehXv8gcG08kLJ4eq2";
// let apiurl=fetch(`https://api.giphy.com/v1/gifs/trending?api_key=hs3A0DJmGqE4Ba8ehXv8gcG08kLJ4eq2&limit=50`)


let apiurl=fetch(`https://api.giphy.com/v1/gifs/trending?api_key=5vQ8s7KyQOqYn9GcOpdoyl55bhPZ5i85&limit=50`)

apiurl.then(res=>res.json()).then(x=>{
    let arr=x.data;
    // console.log(arr);
    arr.map(x=>{
        // console.log(x);
        let title=x.title.toLowerCase();
        // console.log(title);
        let btn=document.getElementById("btn");
        btn.addEventListener("click",(e=>{
        e.preventDefault();
        let val=document.getElementById("value").value.toLowerCase();
        let giff=document.getElementById("img")
        // giff.setAttribute("src","");
        if(title.includes(`${val}`)){
        giff.setAttribute("src",`${x.images.original.url}`);
        // console.log(x.url);
        }
    }))
})
});
apiurl.catch(()=>{
    alert("Api Failed");
    console.log("api failed");
})
        
        
        




// 1.hs3A0DJmGqE4Ba8ehXv8gcG08kLJ4eq2
// 2.f9MAWMVUm4XFBTPt637hqzpu32TScNUx



