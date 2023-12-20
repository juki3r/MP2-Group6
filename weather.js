const apikey = "9dabcc2832ff1053794023a2a96cbe7c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
let coords;


function getLocation() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        coords = "Geolocation is not supported";
    }
}

function showPosition(position){
    coords = `lat=${position.coords.latitude}` + `&lon=${position.coords.longitude}`;
    console.log(coords);

    async function checkWeather(coords){
        const response = await fetch(apiUrl + coords + `&appid=${apikey}` + `&units=metric`);
    
        if(response.status == 404){
            document.querySelector(".error").style.display = "block"
            document.querySelector(".weather").style.display = "none"
            document.querySelector(".humidity-div").style.display = "none"
            document.querySelector(".wind-speed-div").style.display = "none"
        } else {
    
            var data = await response.json();
    
            console.log(data);
    
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)
            + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
            }
    
            document.querySelector(".weather").style.display = "block"
            document.querySelector(".error").style.display = "none"
            document.querySelector(".humidity-div").style.display = "block"
            document.querySelector(".wind-speed-div").style.display = "block"
        }
    }
    
    checkWeather(coords);
}

getLocation();

async function searchWeather(city){
    const response = await fetch(apiUrl + `q=${city}`  + `&appid=${apikey}` + `&units=metric`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
        document.querySelector(".humidity-div").style.display = "none"
        document.querySelector(".wind-speed-div").style.display = "none"
    } else {

        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)
        + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
        document.querySelector(".humidity-div").style.display = "block"
        document.querySelector(".wind-speed-div").style.display = "block"
    }
}

searchBtn.addEventListener("click", ()=>{
    searchWeather(searchBox.value);
});







