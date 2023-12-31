const APIKey = "d6c2a75319ec8ac898391d9718091c3b";

let cities = ["London"];
let selectedCity = "";

function populateHistory() {
    // Get a string from local storage
    let getHistory = localStorage.getItem("selectedCity");

    getHistory = JSON.parse(getHistory);
    // Check if getHistory is an array before iterating
    if (Array.isArray(getHistory) && getHistory.length > 0) {
        const cityButtons = ["button1", "button2", "button3", "button4", "button5", "button6"];
        
        // Loop through the buttons and update their text content
        for (let i = 0; i < getHistory.length && i < cityButtons.length; i++) {
            const buttonId = cityButtons[i];
            const newValue = getHistory[i];
            
            // Update the button text content
            document.getElementById(buttonId).textContent = newValue;
        }
    }
}

function populateTheCards(data, selectedCity) {
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

    // Calculate the temperature (converted from Kelvin to Celsius)
    let temperatureCelsius = data.current.temp - 273.15;
    let temperatureCelsiusDayAfterOne = data.daily[0].temp.day - 273.15;
    let temperatureCelsiusDayAfterTwo = data.daily[1].temp.day - 273.15;
    let temperatureCelsiusDayAfterThree = data.daily[2].temp.day - 273.15;
    let temperatureCelsiusDayAfterFour = data.daily[3].temp.day - 273.15;
    let temperatureCelsiusDayAfterFive = data.daily[4].temp.day - 273.15;

    const iconCode = data.current.weather[0].icon;
    const iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
    $("#weather-icon").html("<img src='" + iconUrl + "' alt='Weather Icon'>");

    const iconCodeDayAfterOne = data.daily[0].weather[0].icon;
    const iconUrlDayAfterOne = "http://openweathermap.org/img/wn/" + iconCodeDayAfterOne + ".png";
    $("#weather-icon").html("<img src='" + iconUrlDayAfterOne + "' alt='Weather Icon'>");

    const iconCodeDayAfterTwo = data.daily[1].weather[0].icon;
    const iconUrlDayAfterTwo = "http://openweathermap.org/img/wn/" + iconCodeDayAfterTwo + ".png";
    $("#weather-icon").html("<img src='" + iconUrlDayAfterTwo + "' alt='Weather Icon'>");

    const iconCodeDayAfterThree = data.daily[2].weather[0].icon;
    const iconUrlDayAfterThree = "http://openweathermap.org/img/wn/" + iconCodeDayAfterThree + ".png";
    $("#weather-icon").html("<img src='" + iconUrlDayAfterThree + "' alt='Weather Icon'>");

    const iconCodeDayAfterFour = data.daily[3].weather[0].icon;
    const iconUrlDayAfterFour = "http://openweathermap.org/img/wn/" + iconCodeDayAfterFour + ".png";
    $("#weather-icon").html("<img src='" + iconUrlDayAfterFour + "' alt='Weather Icon'>");

    const iconCodeDayAfterFive = data.daily[4].weather[0].icon;
    const iconUrlDayAfterFive = "http://openweathermap.org/img/wn/" + iconCodeDayAfterFive + ".png";
    $("#weather-icon").html("<img src='" + iconUrlDayAfterFive + "' alt='Weather Icon'>");

    // Current Weather
    selectedCity = selectedCity || "London";
    document.querySelector('.cityAndCurrentDate').innerHTML = selectedCity + ' ' + currentDate + ' ' + '<img src="' + iconUrl + '" alt="Weather Icon">';
    document.querySelector('.currentTemp').textContent = "Temp: " + temperatureCelsius.toFixed(2) + "°C";
    document.querySelector('.currentWind').textContent = "Wind: " + data.current.wind_speed + " m/s";
    document.querySelector('.currentHumidity').textContent = "Humidity: " + data.current.humidity + "%";

    // Forecast over 5 days
    document.querySelector('.forecastDateOne').innerHTML = oneDayAfterDate;
    document.querySelector('.forecastIconOne').innerHTML = '<img src="' + iconUrlDayAfterOne + '" alt="Weather Icon">';
    document.querySelector('.forecastTempOne').innerHTML = "Temp: " + temperatureCelsiusDayAfterOne.toFixed(2) + "°C";
    document.querySelector('.forecastWindOne').textContent = "Wind: " + data.daily[0].wind_speed + " m/s";
    document.querySelector('.forecastHumidityOne').textContent = "Humidity: " + data.daily[0].humidity + "%";

    document.querySelector('.forecastDateTwo').innerHTML = twoDaysAfterDate;
    document.querySelector('.forecastIconTwo').innerHTML = '<img src="' + iconUrlDayAfterTwo + '" alt="Weather Icon">';
    document.querySelector('.forecastTempTwo').innerHTML = "Temp: " + temperatureCelsiusDayAfterTwo.toFixed(2) + "°C";
    document.querySelector('.forecastWindTwo').textContent = "Wind: " + data.daily[1].wind_speed + " m/s";
    document.querySelector('.forecastHumidityTwo').textContent = "Humidity: " + data.daily[1].humidity + "%";

    document.querySelector('.forecastDateThree').innerHTML = threeDaysAfterDate;
    document.querySelector('.forecastIconThree').innerHTML = '<img src="' + iconUrlDayAfterThree + '" alt="Weather Icon">';
    document.querySelector('.forecastTempThree').innerHTML = "Temp: " + temperatureCelsiusDayAfterThree.toFixed(2) + "°C";
    document.querySelector('.forecastWindThree').textContent = "Wind: " + data.daily[2].wind_speed + " m/s";
    document.querySelector('.forecastHumidityThree').textContent = "Humidity: " + data.daily[2].humidity + "%";

    document.querySelector('.forecastDateFour').innerHTML = fourDaysAfterDate;
    document.querySelector('.forecastIconFour').innerHTML = '<img src="' + iconUrlDayAfterFour + '" alt="Weather Icon">';
    document.querySelector('.forecastTempFour').innerHTML = "Temp: " + temperatureCelsiusDayAfterFour.toFixed(2) + "°C";
    document.querySelector('.forecastWindFour').textContent = "Wind: " + data.daily[3].wind_speed + " m/s";
    document.querySelector('.forecastHumidityFour').textContent = "Humidity: " + data.daily[3].humidity + "%";

    document.querySelector('.forecastDateFive').innerHTML = fiveDaysAfterDate;
    document.querySelector('.forecastIconFive').innerHTML = '<img src="' + iconUrlDayAfterFive + '" alt="Weather Icon">';
    document.querySelector('.forecastTempFive').innerHTML = "Temp: " + temperatureCelsiusDayAfterFive.toFixed(2) + "°C";
    document.querySelector('.forecastWindFive').textContent = "Wind: " + data.daily[4].wind_speed + " m/s";
    document.querySelector('.forecastHumidityFive').textContent = "Humidity: " + data.daily[4].humidity + "%";

    populateHistory();
};

function getCurrentAndForcastedWeather(latitude, longitude, selectedCity) {
    let queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey;
    fetch(queryURL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (data) {
            console.log("Query URL:", queryURL);
            console.log("API Response:", data);
            populateTheCards(data, selectedCity);
        })
        .catch(function (error) {
            console.error("Error fetching data:", error);
            alert("Something went wrong when getting the data. Please try again.");
        });
}

function getLatAndLon(selectedCity) {
    city = selectedCity;
    let geoURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIKey;

    fetch(geoURL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (data) {
            console.log("Query URL: " + geoURL);
            console.log("API Response:" + data);

            if (data.length > 0) {
                let latitude = data[0].lat;
                let longitude = data[0].lon;
                console.log("latitude: " + latitude);
                console.log("longitude: " + longitude);

                // Retrieve existing history array from local storage
                let existingHistory = localStorage.getItem("selectedCity");
                existingHistory = existingHistory ? JSON.parse(existingHistory) : [];

                // Add the new city to the array
                existingHistory.push(selectedCity);

                // Store the updated array back in local storage
                localStorage.setItem("selectedCity", JSON.stringify(existingHistory));

                getCurrentAndForcastedWeather(latitude, longitude, selectedCity);
            } else {
                alert("City not found. Please enter a valid city name.");
            }
        })
        .catch(function (error) {
            console.error("Error fetching data:", error);
            alert("Something went wrong getting the data. Please try again.");
        });
}

// Add a click event handler to clear localstorage
$("#clearAllButton").on("click", function (event) {
    event.preventDefault;
    localStorage.clear();
    location.reload(true);
});

$("#search-button").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    let city = $("#search-input").val().trim();
    if (city) {
        cities.push(city);
        getLatAndLon(city);
    } else {
        alert("You need to input a city name");
        return false;
    }
});

//const div = document.querySelector('.btn')
const div = $(".history")

div.on("click", function (event) {
    var selectedCity = $(this).text().trim();
    console.log(selectedCity);
    getLatAndLon(selectedCity);
});

let queryAPI = "https://api.openweathermap.org/data/3.0/onecall?lat=51.5073219&lon=-0.1276474&appid=" + APIKey; //London
fetch(queryAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Query URL:", queryAPI);
        console.log("API Response:", data);
        populateTheCards(data, "London");
    })
    .catch(function (error) {
        console.error("Error fetching data:", error);
        //alert("Something went wrong when getting the data. Please try again.");
    });
