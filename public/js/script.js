const searchButton = document.querySelector(".search-button")
// let weatherCondition = document.querySelector(".weather-area").textContent
// let weatherTemperature = document.querySelector(".weather-area").textContent



const getWeather = () => {
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
    }
  };
  xhr.open("GET", searchUrl, true);
  xhr.send();
};

searchButton.addEventListener("click", getWeather)

// function to use search query to search cities.js
