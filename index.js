let search_input = document.querySelector("#search_input");
let search_button = document.querySelector("#search_button");
let outputBox = document.querySelector("#outputBox");


// `https://api.weatherapi.com/v1/current.json?key=5449b4155fd640ce85c103627242309&q=karachi&aqi=no`


let weatherObj = new Object();
search_button.addEventListener("click",async ()=>{
outputBox.innerHTML = "";

    if(search_input.value == ""){
        alert("Fill Input Box")
    }

    let fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=5449b4155fd640ce85c103627242309&q=${search_input.value}&aqi=no`);
    let data = await fetchData.json();
    let current = await data.current;

    // More Data you can fetch using current varaible

// Add to The weatherObj
    weatherObj.temp_c = current.temp_c;
    weatherObj.temp_f = current.temp_f;
    weatherObj.humidity = current.humidity;
    weatherObj.uv = current.uv;
    
    displayTheOutput(weatherObj)
});




function displayTheOutput(obj){

    for (const key in obj) {
        outputBox.innerHTML += (`${key} : ${obj[key]} <br><br>`);
    }
}