// var searchCity = document.querySelector("");
var searchBtn = document.getElementById("search-btn");
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var speed = document.getElementById("wind");
var uvi = document.getElementById("uvi");
// var lat = document.getElementById("lat");
// var lon = document.getElementById("lon");
var current = document.getElementById("currentConditions");
var APIKey = "6d385c1b5e0b0ca70a1427d6269e84a1";

// wWeather index goes here
function getWeather(e) {
  e.preventDefault();
  var cityName = document.getElementById("cityname").value;
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&Appid=${APIKey}&units=imperial`;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log("Temperature is:", data.main.temp);
      console.log("Humidity is:", data.main.humidity);
      console.log("speed is:", data.wind.speed);

      current.textContent = data.name;
      temp.textContent = data.main.temp + ".℉";
      humidity.textContent = data.main.humidity + "% -Humidity";
      wind.textContent = data.wind.speed + "-MPH";

      //   var uvi = document.getElementById("uvi").value;
      //   var uvi = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
      //   fetch(apiUrl)
      // .then(function (response) {
      //   return response.json();
      // })
      // .then(function (data) {
      //   console.log("uvi is:", data.main.uvi);
      //   uvi.textContent = data.current.uvi;
    });

  // "lat": 40.66,
  // "lon": -112.01,

  document.getElementById("cityname").value = "";
}

searchBtn.addEventListener("click", getWeather);
