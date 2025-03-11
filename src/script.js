function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city-input");
  let city = document.querySelector(".city");
  city.innerHTML = cityInput.value;
  let apiKey = `9b5ff5067a4fcbft35338801bbo0df4a`;
  function showWeather(response) {
    let time = document.querySelector(".time");
    let date = document.querySelector(".date");
    let tempNow = document.querySelector(".tempNow");
    let minTemp = document.querySelector(".min.temp");
    let maxTemp = document.querySelector(".max.temp");
    let icon = document.querySelector(".icon");
    let description = document.querySelector(".description");
    let feelsLike = document.querySelector(".feelsLike");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");
  }
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units={metric}`;
  axios.get(url).then(showWeather());
}
let submitCityInput = document.querySelector("form.search-city");
submitCityInput.addEventListener("submit", searchCity);
