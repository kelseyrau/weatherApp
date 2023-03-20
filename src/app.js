function displayWeather(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".weatherDescription").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#searchBar").value;

  searchCity(city);
}

function searchCity(city) {
  let apiKey = "422a3298b29e07a997d951a05930e2a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector(".searchForm");
form.addEventListener("submit", search);

function getCurrentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "422a3298b29e07a997d951a05930e2a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function showCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCurrentLocation);
}

let currentLocationButton = document.querySelector(".currentLocationButton");
currentLocationButton.addEventListener("click", showCurrentLocation);

function formatDate(date) {
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  return ` ${currentDay} ${hours}:${minutes}`;
}

let now = new Date();
document.querySelector(".day").innerHTML = formatDate(now);

searchCity("Melbourne");

// weather forecast details

function displayForcast(response) {
  console.log(response.data.list[0].main.temp_min);
  console.log(response.data.list);
  let temperatureLow = document.querySelector("#monMin");
  temperatureLow.innerHTML = Math.round(response.data.list[3].main.temp_min);
  let temperatureHigh = document.querySelector("#monMax");
  temperatureHigh.innerHTML = Math.round(response.data.list[3].main.temp_max);
}
let apiKey = "422a3298b29e07a997d951a05930e2a3";
let lat = "-38.150002";
let lon = "144.3598";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
https: console.log(apiUrl);
axios.get(apiUrl).then(displayForcast);
