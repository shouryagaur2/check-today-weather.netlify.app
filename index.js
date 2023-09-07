const apiKey = "10287d2db3f3c0b9c8aaa06cac14930c";
// const OrginalapiUrl = "https://api.openweathermap.org/data/2.5/weather?q={cityName}}&appid={APIkey}&unit=metric";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

// let cityName = "Indore";
const uint = "&units=metric";
const applied = "&appid=";

// take  data from search box 
const searchBox = document.querySelector(".search input");
const searchBTB = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function chekWeather(cityName) {


    const completeUrl = apiUrl.concat(cityName).concat(applied).concat(apiKey).concat(uint);
    console.log(completeUrl);

    const response = await fetch(completeUrl);

    // if invalid data 
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        var data = await response.json();

        // display the data 

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


        // update the Img 

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png"

        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/Clear.png"

        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png"

        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png"

        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png"

        }

        // show the data if we intern the city name other wise hide the disply of weather 
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}

searchBTB.addEventListener("click", () => {

    chekWeather(searchBox.value);

});