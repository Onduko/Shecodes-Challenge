function searchCity(response) {
  response.preventDefault();
  let cityInput = document.querySelector("#search-city-input");
  let city = document.querySelector(".city");
  city.innerHTML = cityInput.value;
}
let submitCityInput = document.querySelector("form.search-city");
submitCityInput.addEventListener("submit", searchCity);
