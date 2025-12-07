let elCountryList = document.querySelector(".country-list")
let elCountrySelect = document.querySelector(".country-select")


function renderSelectOptions(arr , list) {
    let countryRes = arr.reduce((prevValue, item) => {
        if (!prevValue.includes(item.region)) { 
            prevValue.push(item.region)
        }
        return prevValue
    },[])
    countryRes.forEach(item => {
        let elOption = document.createElement("option")
        elOption.textContent = item
        elOption.value = item.toLowerCase()
        list.appendChild(elOption)
    });
}


renderSelectOptions(countries,elCountrySelect)



function renderCountries(arr , list) {
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "w-[300px]  shadow-lg  border-[1px] border-[#ffff] rounded-[20px]  owerflow-hidden "
        elItem.innerHTML= `
        <img class=" w-[300px] h-[200px] shadow-md  rounded-t-[20px]" src="${item.img}" alt="Flag" width="300" height="200">
            <div class="p-5  ">
                <p>Country: ${item.name}</p>
                <p>Capital: ${item.capital}</p>
                <p>Ropulation: ${item.population}</p>
                <p>Region:${item.region}</p>
            </div>
         <div class="p-2 flex justify-between">
            <button class="p-[8px] border-[1px]  border-[#787878] rounded-[10px] bg-[#787878] "><img src="./images/Like_2.png" alt="Like" width="20px"></button>
            <button class="p-[8px] border-[1px]  border-[#787878] rounded-[10px] bg-[#787878] "><img src="/images/Saved.png" alt="Saved" width="20"></button>
            <button class="p-[8px] border-[1px]  border-[#787878] rounded-[10px] bg-[#787878] "><img src="./images/More.png" alt="More" width="20"></button>
            <button class="p-[8px] border-[1px]  border-[#787878] rounded-[10px] bg-[#787878] "><img src="./images/Updeate.png" alt="Updeate" width="20"></button>
            <button class="p-[8px] border-[1px]  border-[#787878] rounded-[10px] bg-[#787878] "><img src="./images/delete.png" alt="delete" width="20"></button>
        </div>
        ` 
        list.appendChild(elItem)
    })
}

renderCountries(countries,elCountryList)