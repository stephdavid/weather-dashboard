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


---

### References

Day.js
https://day.js.org/en/<br>

(Day.js) AdvancedFormat
https://day.js.org/docs/en/plugin/advanced-format<br>

Day-Planner
https://github.com/JenG1/Day-Planner/tree/master<br>

W3C - ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used
https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html<br>

click event
https://api.jquery.com/click/<br>

How to Set Value of Textarea in jQuery
https://www.tutorialrepublic.com/faq/how-to-set-value-of-textarea-in-jquery.php<br>

localStorage in JavaScript: A complete guide
https://blog.logrocket.com/localstorage-javascript-complete-guide/<br>

hour
https://day.js.org/docs/en/get-set/hour<br>

Is Before
https://day.js.org/docs/en/query/is-before<br>

Using data attributes
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes<br>

Add and remove a class on click using jQuery?
https://stackoverflow.com/questions/19520446/add-and-remove-a-class-on-click-using-jquery


Why Bootstrap 4 and FontAwesome 5 Are A Killer Combo
https://www.danylkoweb.com/Blog/why-bootstrap-4-and-fontawesome-5-are-a-killer-combo-GF
