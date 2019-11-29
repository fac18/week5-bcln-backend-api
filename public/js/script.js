const searchButton = document.querySelector(".search-button");
const currentDate = document.querySelector(".date");

var dt = new Date();
// ensure date comes as 01, 09 etc
var DD = ("0" + dt.getDate()).slice(-2);
// getMonth returns month from 0
var MM = ("0" + (dt.getMonth() + 1)).slice(-2);
var YYYY = dt.getFullYear();
var hh = ("0" + dt.getHours()).slice(-2);
var mm = ("0" + dt.getMinutes()).slice(-2);
var date_string = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm;
currentDate.textContent = date_string;

let addDom = () => {
  let results = document.querySelector(".results");
  let weatherDescription = document.createElement("p");
  let weatherTemp = document.createElement("p");

  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  weatherDescription.textContent = weatherCondition;
  weatherTemp.textContent = weatherTemperature;

  results.appendChild(weatherDescription);
  results.appendChild(weatherTemp);
};

const getWeather = event => {
  event.preventDefault();
  const cityBox = document.querySelector(".dropdown");
  let searchTerm = cityBox.value;
  let xhr = new XMLHttpRequest();

  console.log(searchTerm);
  let searchUrl = `/search?q=${searchTerm}`;

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let cityWeather = JSON.parse(xhr.responseText);
      console.log(cityWeather);
      console.log(cityWeather.weatherDesc);
      weatherCondition = "Expect " + cityWeather.weatherDesc;
      weatherTemperature =
        "Temp is " + Math.round(cityWeather.weatherTemp) + "°C";
      addDom();
    }
  };
  xhr.open("GET", searchUrl, true);
  xhr.send();
};

searchButton.addEventListener("click", getWeather);
