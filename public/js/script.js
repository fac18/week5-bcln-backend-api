const cityBox = document.querySelector("#city");
const searchButton = document.querySelector("#search-button")

const getWeather = () => {
  let xhr = new XMLHttpRequest();
  let searchTerm = cityBox.value;
  let searchUrl = `/search?q=${searchTerm}`;

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let cityWeather = JSON.parse(xhr.responseText);
      console.log(cityWeather);
    }
  };
  xhr.open("GET", searchUrl, true);
  xhr.send();
};

searchButton.addEventListener("click", getWeather())

// function to use search query to search cities.js
