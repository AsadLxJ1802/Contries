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
        elItem.className = "w-[300px]  shadow-[5px_5px_10px_#787878] bg-[#fff] border-[1px] border-[#ffff] rounded-[20px]  owerflow-hidden  transform transition-transform duration-300 hover:scale-105"
        elItem.innerHTML= `
        <img class=" w-[300px] h-[200px] border-[3px] border-[#fff] border-b-[#000]  rounded-t-[20px]" src="${item.img}" alt="Flag" width="300" height="200">
            <div class="px-5 pt-5  ">
                <p><span class="text-[#007BFF] shadow-[0px_1px_2px_0px_#000]">Country</span> : ${item.name}</p>
                <p><span class="text-[#007BFF] shadow-[0px_1px_2px_0px_#000]">Capital</span> : ${item.capital}</p>
                <p><span class="text-[#007BFF] shadow-[0px_1px_2px_0px_#000]">Ropulation</span> : ${item.population}</p>
                <p><span class="text-[#007BFF] shadow-[0px_1px_2px_0px_#000]">Region</span> : ${item.region}</p>
            </div>
            <div class="p-5 flex justify-between">
                <button class="p-[8px] border-[1px]  border-[#fff] rounded-[10px] bg-[#fff] "><img src="./images/Like_2.png" alt="Like" width="20px"></button>
                <button class="p-[8px] border-[1px]  border-[#fff] rounded-[10px] bg-[#fff] "><img src="/images/Saved.png" alt="Saved" width="20"></button>
                <button class="p-[8px] border-[1px]  border-[#fff] rounded-[10px] bg-[#fff] "><img src="./images/More.png" alt="More" width="20"></button>
                <button class="p-[8px] border-[1px]  border-[#fff] rounded-[10px] bg-[#fff] "><img src="./images/Updeate.png" alt="Updeate" width="20"></button>
                <button class="p-[8px] border-[1px]  border-[#fff] rounded-[10px] bg-[#fff] "><img src="./images/delete.png" alt="delete" width="20"></button>
            </div>
        ` 
        list.appendChild(elItem)
    })
}

renderCountries(countries,elCountryList)