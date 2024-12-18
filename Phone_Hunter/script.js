const loadPhone = async (searchText, isShow) => {
    // Show loading spinner
    loadingSpinner(true);
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    // console.log(data.data)
    displayPhones(data.data, isShow);
}



const phoneContainer = document.getElementById('phone-container');

const displayPhones = (phones, isShow) => {
   
    const showBtn = document.getElementById("show-btn");
    if (phones.length > 12 && !isShow) {
        showBtn.classList.remove("hidden");
    } else {
        showBtn.classList.add("hidden");
    }

if(!isShow){
    phones = phones.slice(0, 12);
   
}


    // console.log(phones.length);

    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 w-96 shadow-xl`;
        phoneCard.innerHTML = `
                        <figure>
                    <img src="${phone.image}" />
                </figure>
                <div class="card-body">
                    <h2 class=" font-bold text-2xl text-center">${phone.phone_name}</h2>
                    <p class="text-center">If a dog chews shoes whose shoes does he choose?</p>
                    <h2 id="price" class="text-center font-bold text-2xl ">$999</h2>
                    <div class="card-actions justify-center ">
                        <button onclick="showDetails()" class="btn btn-primary">Show Details</button>
                    </div>
                </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
    // Hide loading spinner
    loadingSpinner(false);
}

const handleSearch = (isShow) => {
    phoneContainer.innerHTML = '';
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    if(searchValue){
        loadPhone(searchValue, isShow);
    }
    else{
        loadPhone("a", isShow);
        }
    // console.log(searchValue);
  
}


const loadingSpinner = (isLoading) => {
    const spinner = document.getElementById("loading-spinner");
    const showBtn = document.getElementById("show-btn");

    if (isLoading) {
        spinner.classList.remove("hidden");
        showBtn.classList.add("hidden");
    }
    else {
        spinner.classList.add("hidden");
    }
}

const showAll = ()=>{
    handleSearch(true);
}

const showDetails =()=>{
    console.log();
}



//Default Data Load
loadPhone("a");
