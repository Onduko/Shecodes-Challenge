let time = document.querySelector(".time");
let date = document.querySelector(".date");
dateToday = new Date();
let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sartuday",
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
date.innerHTML = `${day[dateToday.getDay()]}, ${dateToday.getDate()} ${
  month[dateToday.getMonth()]
} ${dateToday.getFullYear()}`;
let tempNow = document.querySelector(".tempNow");
let icon = document.querySelector(".icon");
let description = document.querySelector(".description");
let feelsLike = document.querySelector(".feelsLike");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

function showWeather(response) {
  timeNow = new Date(response.data.time * 1000);
  time.innerHTML = `${timeNow.getHours()}:${timeNow.getMinutes()}`;
}
function weather(city) {
  let apiKey = `9b5ff5067a4fcbft35338801bbo0df4a`;
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
}
function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city-input");
  let city = document.querySelector(".city");
  city.innerHTML = cityInput.value;
  weather(cityInput.value);
}
let submitCityInput = document.querySelector("form.search-city");
submitCityInput.addEventListener("submit", searchCity);
