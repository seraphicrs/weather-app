let inp = document.querySelector("input");
let btn = document.querySelector("button");


let temp = document.querySelector("#temp");
let humidity = document.querySelector("#humid");
let wind = document.querySelector("#wind");
let description = document.querySelector("#info");

let city;
let url;


btn.addEventListener("click", function () {
   
    console.log("Button clicked");
    city = inp.value;
         url = url = `http://api.weatherapi.com/v1/current.json?key=3705e9e5a6ed4b218ba153411262507&q=${city}&aqi=yes`;
  
    getInfo();
    



 
});



async function  getInfo()
 {
    try{
    let res = await axios.get(url);
    temp.innerText = `Temperature : ${res.data.current.temp_c}°C`;
humid.innerText = `Humidity : ${res.data.current.humidity}%`;
wind.innerText = `Wind Speed : ${res.data.current.wind_kph} km/h`;
info.innerText = `Description : ${res.data.current.condition.text}`;

    }
    catch(e)
    {
     console.log("unexpected error : " , e);

    }
    
}