const APIKey = "d6c2a75319ec8ac898391d9718091c3b";


let queryURLLondon = "https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=" + APIKey;

let queryURLBexleyheath = "https://api.openweathermap.org/data/2.5/weather?q=Bexleyheath,UK&appid=" + APIKey;

let queryURLDublin = "https://api.openweathermap.org/data/2.5/weather?q=Dublin,IRE&appid=" + APIKey;

let queryURLKingston = "https://api.openweathermap.org/data/2.5/weather?q=Kingston,JM&appid=" + APIKey;

let queryURLAthens = "https://api.openweathermap.org/data/2.5/weather?q=Athens,GR&appid=" + APIKey;

let queryURLOttawa = "https://api.openweathermap.org/data/2.5/weather?q=Ottawa,CA&appid=" + APIKey;

let queryURL = "api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}"


fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Query URL:", queryURL);

        // Log the resulting object
        console.log("API Response:", data);

        // Calculate the temperature (converted from Kelvin to Celsius)
        let temperatureCelsius = data.main.temp - 273.15;

        /*


        // Transfer content to HTML
        document.querySelector('.city').textContent = "City: " + data.name;
        document.querySelector('.wind').textContent = "Wind Speed: " + data.wind.speed + " m/s";
        document.querySelector('.humidity').textContent = "Humidity: " + data.main.humidity + "%";
        document.querySelector('.temp').textContent = "Temperature: " + temperatureCelsius.toFixed(2) + "°C";

*/
        
        document.querySelector('.cityAndCurrentDate').textContent = data.name;
        document.querySelector('.currentTemp').textContent = temperatureCelsius.toFixed(2) + "&deg;C";
        document.querySelector('.currentWind').textContent = data.wind.speed + " m/s";
        document.querySelector('.currentHumidity').textContent = data.name + "%";




    })
    .catch(function (error) {
        console.error("Error fetching data:", error);

    });



/*

let citiesArr = ["Bexleyheath,UK", "London,UK", "Ottawa,CA", "Kingston,JM", "Dublin,IR", "Athens,GR"];

for (i = 0; i <= citiesArr.length; i++) {

  let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citiesArr[i] + "&appid=" + APIKey;

}

*/

//Ottawa latitude 45.424721, and the longitude is -75.695000 

//let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=Bexleyheath&appid=" + APIKey; // get lat & lon 

//London GB  - Latitude 51.5073219 longitude -0.1276474

//Dublin IE - Latitude 53.3498006 longitude -6.2602964

//Athens GR -  Latitude 37.9839412 Longitude 23.7283052

//Ottawa CA - Latitude 45.424721 Longitude -75.695000// Toronto??? 

//Kingston JM - Latitude 17.9712148 Longitude -76.7928128

//Bexleyheath UK - Latitude 51.4634854 Longitude 0.1480552 / London???


//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=51.5073219&lon=-0.1276474&appid=" + APIKey; //London GB

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=53.3498006&lon=-6.2602964&appid=" + APIKey; //Dublin IE

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=37.9839412&lon=23.7283052&appid=" + APIKey; //Athens GR

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=45.424721&lon=-75.695000&appid=" + APIKey; //Ottawa CA

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=17.9712148&lon=-76.7928128&appid=" + APIKey; //Kingston JM

//let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=51.4634854&lon=0.1480552&appid=" + APIKey; //Bexleyheath GB
