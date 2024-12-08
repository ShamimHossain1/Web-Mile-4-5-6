const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const inputGrp = document.querySelectorAll(".input-group select");
const convertBtn = document.getElementById("convert-btn");
const fromCurr = document.getElementById("from-currency");
const toCurr = document.getElementById("to-currency");

for(let select of inputGrp){
    for(curCode in countryList){
        let option = document.createElement("option");
        option.value = curCode;
        option.innerText = curCode;
        select.append(option);
    }
}

convertBtn.addEventListener("click", async (event)=>{
    event.preventDefault();
    let amount = document.getElementById("amount");
   
    if(amount.value == "" || amount.value < 1){
        amount.value = 1;
     
    }



    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}`;
    console.log(URL);
    const response = await fetch(URL);

    // Check if the response is successful
    if (!response.ok) {
        console.error('Error fetching data:', response.status);
        return; // Stop execution if the response is not OK
    }

    const data = await response.json();
    console.log(data);
    
});