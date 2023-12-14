const APIKey = "d6c2a75319ec8ac898391d9718091c3b";

// Get today's date
let date = new Date();

date.setDate(date.getDate());

// Calculate dates for one to five days after today
let oneDayAfter = new Date(date);
oneDayAfter.setDate(date.getDate() + 1);

let twoDaysAfter = new Date(date);
twoDaysAfter.setDate(date.getDate() + 2);

let threeDaysAfter = new Date(date);
threeDaysAfter.setDate(date.getDate() + 3);

let fourDaysAfter = new Date(date);
fourDaysAfter.setDate(date.getDate() + 4);

let fiveDaysAfter = new Date(date);
fiveDaysAfter.setDate(date.getDate() + 5);

// Format dates
let format = { day: 'numeric', month: 'numeric', year: 'numeric' };

let currentDate = date.toLocaleDateString('en-UK', format);
let oneDayAfterDate = oneDayAfter.toLocaleDateString('en-UK', format);
let twoDaysAfterDate = twoDaysAfter.toLocaleDateString('en-UK', format);
let threeDaysAfterDate = threeDaysAfter.toLocaleDateString('en-UK', format);
let fourDaysAfterDate = fourDaysAfter.toLocaleDateString('en-UK', format);
let fiveDaysAfterDate = fiveDaysAfter.toLocaleDateString('en-UK', format);

let citiesArr = ["Bexleyheath (Gtr London), UK", "London, UK", "Ottawa, Canada", "Kingston, Jamaica", "Dublin, Ireland", "Athens, Greece"];

/*
let queryURLLondon = "https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=" + APIKey;

let queryURLBexleyheath = "https://api.openweathermap.org/data/2.5/weather?q=Bexleyheath,UK&appid=" + APIKey;

let queryURLDublin = "https://api.openweathermap.org/data/2.5/weather?q=Dublin,IRE&appid=" + APIKey;

let queryURLKingston = "https://api.openweathermap.org/data/2.5/weather?q=Kingston,JM&appid=" + APIKey;

let queryURLAthens = "https://api.openweathermap.org/data/2.5/weather?q=Athens,GR&appid=" + APIKey;

let queryURLOttawa = "https://api.openweathermap.org/data/2.5/weather?q=Ottawa,CA&appid=" + APIKey;
*/

<!--
    let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=51.5073219&lon=-0.1276474&appid=" + APIKey; //London GB-->

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=51.5073219&lon=-0.1276474&appid=" + APIKey; //London GB

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=53.3498006&lon=-6.2602964&appid=" + APIKey; //Dublin IE

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=37.9839412&lon=23.7283052&appid=" + APIKey; //Athens GR

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=45.424721&lon=-75.695000&appid=" + APIKey; //Ottawa CA

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=17.9712148&lon=-76.7928128&appid=" + APIKey; //Kingston JM

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=51.4634854&lon=0.1480552&appid=" + APIKey; //Bexleyheath GB

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Query URL:", queryURL);

        // Log the resulting object
        console.log("API Response:", data);

        // Calculate the temperature (converted from Kelvin to Celsius)
        let temperatureCelsius = data.current.temp - 273.15;

        const iconCode = data.current.weather[0].icon;
        const iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";     
        $("#weather-icon").html("<img src='" + iconUrl + "' alt='Weather Icon'>");
     
        // Current Weather
        document.querySelector('.cityAndCurrentDate').innerHTML = citiesArr[1] + ' ' + currentDate + ' ' + '<img src="' + iconUrl + '" alt="Weather Icon">';
        document.querySelector('.currentTemp').textContent = "Temp: " + temperatureCelsius.toFixed(2) + "°C";
        document.querySelector('.currentWind').textContent = "Wind: " + data.current.wind_speed + " m/s";
        document.querySelector('.currentHumidity').textContent = "Humidity: " + data.current.humidity + "%";

        // Forecast over 5 days



    })
    .catch(function (error) {
        console.error("Error fetching data:", error);

    });


//let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=Bexleyheath&appid=" + APIKey; // get lat & lon 
//London GB  - Latitude 51.5073219 longitude -0.1276474
//Dublin IE - Latitude 53.3498006 longitude -6.2602964
//Athens GR -  Latitude 37.9839412 Longitude 23.7283052
//Ottawa CA - Latitude 45.424721 Longitude -75.695000
//Kingston JM - Latitude 17.9712148 Longitude -76.7928128
//Bexleyheath UK - Latitude 51.4634854 Longitude 0.1480552

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=51.5073219&lon=-0.1276474&appid=" + APIKey; //London GB

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=53.3498006&lon=-6.2602964&appid=" + APIKey; //Dublin IE

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=37.9839412&lon=23.7283052&appid=" + APIKey; //Athens GR

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=45.424721&lon=-75.695000&appid=" + APIKey; //Ottawa CA

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=17.9712148&lon=-76.7928128&appid=" + APIKey; //Kingston JM

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=51.4634854&lon=0.1480552&appid=" + APIKey; //Bexleyheath GB
