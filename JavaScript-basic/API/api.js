const URL ="https://api.thecatapi.com/v1/images/search?limit=10";



const getCatPic = async ()=>{
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data);
return data;
};

function getData (){
    fetch(URL).then((res)=>{
        return res.json();
    }).then((data)=>{
        // console.log(data);
       displayData(data);
    })
    
}

function displayData(data){
    console.log(data);

    const list = document.getElementById("list");
    for(const info of data){
        console.log(info);
        const li = document.createElement('li');
        li.textContent = info.url;
        list.appendChild(li);
    }
}


// getCatPic();

