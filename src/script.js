let cityInput = document.querySelector("#search-city-input");
let city = document.querySelector(".city");
let time = document.querySelector(".time");
let date = document.querySelector(".date");
dateToday = new Date();
if (dateToday.getMinutes() > 10) {
  time.innerHTML = `${dateToday.getHours()}:${dateToday.getMinutes()}`;
} else {
  time.innerHTML = `${dateToday.getHours()}:0${dateToday.getMinutes()}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
date.innerHTML = `${days[dateToday.getDay()]}, ${dateToday.getDate()} ${
  month[dateToday.getMonth()]
} ${dateToday.getFullYear()}`;
let tempNow = document.querySelector(".tempNow");
let icon = document.querySelector(".icon");
let description = document.querySelector(".description");
let feelsLikeTemp = document.querySelector(".feelsLikeTemp");
let humidityPercentage = document.querySelector(".humidityPercentage");
let windSpeed = document.querySelector(".windSpeed");
let body = document.querySelector("body");
let forecast = document.querySelector(".forecast");

function showWeather(response) {
  tempNow.innerHTML = Math.round(response.data.temperature.current);
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="iconImage">`;
  description.innerHTML = response.data.condition.description;
  feelsLikeTemp.innerHTML = `Feels like: ${Math.round(
    response.data.temperature.feels_like
  )}°C`;
  humidityPercentage.innerHTML = `Humidity: ${Math.round(
    response.data.temperature.humidity
  )}%`;
  windSpeed.innerHTML = `Wind Speed: ${Math.round(
    response.data.wind.speed
  )} km/hr`;
  city.innerHTML = response.data.city;
  let backgroundUrl = `Images/${response.data.condition.icon}.jpg`;
  body.style.backgroundImage = `url(${backgroundUrl})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundRepeat = "no-repeat";
}
function weather(city) {
  let apiKey = `9b5ff5067a4fcbft35338801bbo0df4a`;
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
}
function showWeatherForecast(response) {
  let forecastHTML = "";
  response.data.daily.forEach(function (day) {
    let forecastDate = new Date(day.time * 1000);
    let forecastDay = days[forecastDate.getDay()];
    forecastHTML += `<div class="daily">
    <div class="day">${forecastDay}</div>
    <div ><img src="${day.condition.icon_url}" class="forecastIcon"></div>
    <div class="temperatureExtremes">
     <div class="max">${Math.round(day.temperature.maximum)}°C</div>
     <div class="min">${Math.round(day.temperature.minimum)}°C</div>
    </div>
    </div>`;
  });
  forecast.innerHTML = forecastHTML;
}
function weatherForecast(city) {
  let forecastApiKey = `9b5ff5067a4fcbft35338801bbo0df4a`;
  let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${forecastApiKey}&units=metric`;
  axios.get(forecastUrl).then(showWeatherForecast);
}

function searchCity(event) {
  event.preventDefault();
  city.innerHTML = cityInput.value;
  weather(cityInput.value);
  weatherForecast(cityInput.value);
}
let submitCityInput = document.querySelector("form.search-city");
submitCityInput.addEventListener("submit", searchCity);
