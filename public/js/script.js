const searchButton = document.querySelector(".search-button")

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
}

const getWeather = (event) => {
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
      console.log(cityWeather.weatherDesc)
      weatherCondition = cityWeather.weatherDesc
      weatherTemperature = cityWeather.weatherTemp
      addDom();
    }
  };
  xhr.open("GET", searchUrl, true);
  xhr.send();
};

searchButton.addEventListener("click", getWeather)
