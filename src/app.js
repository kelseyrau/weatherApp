function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector(".temp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weatherDescription");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "9d13ecb1bc86a7at770cb57453d9oeff";
let query = "Geelong";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric;`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
