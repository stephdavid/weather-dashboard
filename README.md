# weather-dashboard
Module 8 Challenge - Server-Side APIs: Weather Dashboard  

Challenge: Build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

---

### Webpage

Weather Dashboard
https://stephdavid.github.io/weather-dashboard/
---

### Screenshots


**Initial View**

![initial view ](.png)

---

**View with a diffent city selected**

![one stored entry view ](.png)

---


### Acceptance Criteria

The app should:

* Create a weather dashboard with form inputs.
  * When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
  * When a user views the current weather conditions for that city they are presented with:
    * The city name
    * The date
    * An icon representation of weather conditions
    * The temperature
    * The humidity
    * The wind speed
  * When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
    * The date
    * An icon representation of weather conditions
    * The temperature
    * The humidity
  * When a user click on a city in the search history they are again presented with current and future conditions for that city

✔️
 
---

### Process

* I've created the webpage using bootstrap. Its responsiveness needs to be sorted out. The bottom sections collapse into each other rather than align in a single row. TODO

* Last evening's bootcamp class was quite enlightening on APIs, and JavaScript's fetch function. I started working on getting city weather info from OpenWeatherMAP. I already had a key, and using the Current weather API - https://openweathermap.org/current produced some nice results. To complete the info required for this project, however, I needed the Daily Forecast 16 Days API. After obtaining the latitude and longitude of the six cities I'm using, I tried to get that info. But I'm getting a 401 error. I searched for the reason why and determined that I needed to subscribe to the One Call API 3.0 level. With this, I would only start incurring charges after 1,000 API calls per day. So, I subscribed. As this did not resolve the issue - I was still get a 401 error, I started an email contact with the help desk. I responded to the latest email with a copy of the URL API call. The Service replied - I needed a different syntax as shown on their page https://openweathermap.org/api/one-call-3#current I tried it - it worked. To get the latitude and longitude I used Open Weather Map's GeoCoding API - https://openweathermap.org/api/geocoding-api. 

* Populated today's weather info and one day after info from the API data. Commencing work on a for loop to gather info for all five days forecasts.

* No for loop just yet (if at all), but all 5 days populated.

* OK, I've now got the search getting a result, as well as the buttons with event delegation - how do I get this data to replace citiesArr on line 120. Somehow this info will inform what the queryURL will be 

* Am able to pull specific info from the Array returned by the openweathermap geocoding API and the Object returned by the openweathermap one-call-3 obtained from the longitude and latitude elements from the geogoding API which were required by the one-call-3 (this is the API that shows data over several days). The "free" api provides only current day info. Now, I should be able to plug in the info into the html page.

* Overview of where I'm at : Weather dashboard – what am I doing 
    1.	On page load – display default city (London) weather and icon for today, and forecasts for following 5 days
    How achieved:
    a.	jQuery document.ready – a call to function getDefaultInfo
    b.	In getDefaultInfo function: 1. Default call (using London lat & lon info) to weather api 2. The data object from that call included as an argument in the call to function populateTheCards(data)
    c.	In populateTheCards() fill in the name of the city, and the weather data for today and following 5 days
    2.	On user input and search or selection of a city button, the name of the city is changed to match the user selection and its current-day weather and 5-day forecast is displayed. How achieved:
    a.	On click event for Search – 1. Collect the string input by the user and push it to the cities array 2. Assign the last item in the cities array (which will be the user info) to a variable 3. Call the function getLatAndLon passing to it selectedCity
    b.	Event listener(propagation) for the buttons. 1. Value of button selected assigned to variable selectedCity 3. Call the function getLatAndLon passing to it selectedCity
    c.	In getLatAndLon function, a call to the geoloc api with the selectedCity to get its latitude and longitude. Call the function getCurrentAndForecastedWeather passing it latitude and longitude.
    d.	In getCurrentAndForecastedWeather 1. call (using passed lat & lon info) to weather api 2. the data object from that call included as an argument in the call to function populateTheCards(data)
    e.	In populateTheCards() fill in the name of the city, and the weather data for today and following 5 days

* Having got the app working, I've started on error handling, using the handling mechanism of the Fetch API. 

In the on click event, added handling of situation where the user does not input any info in the search input box.

In the getLatAndLon getCurrentAndForecastedWeather function, handled the error of a bad network response.

In the getLatAndLon function, handled the situation where the user inputs either gibberish or an incorrect city name.

---

### References

JavaScript Get Current Date - Today's Date in JS
https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/<br>

Intl.DateTimeFormat
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat<br>

How to Add Days to Current Date in JavaScript
https://www.tutorialrepublic.com/faq/how-to-add-days-to-current-date-in-javascript.php<br>

Formatting Dates With the DateTimeFormat Object
https://betterprogramming.pub/formatting-dates-with-the-datetimeformat-object-9c808dc58604<br>

[JavaScript] - How to get the date 3 days after today in JavaScript 
https://www.shecodes.io/athena/42795-how-to-get-the-date-3-days-after-today-in-javascript<br>

[JavaScript] - How to add weather visuals using JavaScript and APIs 
https://www.shecodes.io/athena/37844-how-to-add-weather-visuals-using-javascript-and-apis<br>

Weather Conditions
https://openweathermap.org/weather-conditions<br>

How to get the last element in an array in JavaScript?
https://medium.com/codex/how-to-get-the-last-element-in-an-array-in-javascript-c106f2f4b830<br>

document.ready()
https://learn.jquery.com/using-jquery-core/document-ready/<br>

Event Delegation in JavaScript –Explained with an Example
https://www.freecodecamp.org/news/event-delegation-javascript/<br>

Using the Fetch API
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch<br>

Implement error handling when using the Fetch API
https://web.dev/articles/fetch-api-error-handling<br>

Error handling with the Fetch API
https://rapidapi.com/guides/error-handling-fetch<br>


