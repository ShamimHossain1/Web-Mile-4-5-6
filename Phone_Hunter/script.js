const loadPhone = async (searchText)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    // console.log(data.data)
    displayPhones(data.data);
}

const displayPhones = phones =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 w-96 shadow-xl`;
        phoneCard.innerHTML=`
                        <figure>
                    <img src="${phone.image}" />
                </figure>
                <div class="card-body">
                    <h2 class=" font-bold text-2xl text-center">${phone.phone_name}</h2>
                    <p class="text-center">If a dog chews shoes whose shoes does he choose?</p>
                    <h2 id="price" class="text-center font-bold text-2xl ">$999</h2>
                    <div class="card-actions justify-center ">
                        <button class="btn btn-primary">Show Details</button>
                    </div>
                </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}

const handleSearch = ()=>{
    
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    console.log(searchValue);
    loadPhone(searchValue);
}

// loadPhone();
