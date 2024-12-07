const URL ="https://api.thecatapi.com/v1/images/search?limit=10";

// console.log(promise);

const getCatPic = async ()=>{
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);

};

function getData (){
    fetch(URL).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
    })
}


getData();
getCatPic();