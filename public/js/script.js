const cityBox = document.querySelector('input[name="city-box"]');

cityBox.addEventListener("click", getWeather);

// function to use search query to search cities.js
const getWeather = () => {
  let xhr = new XMLHttpRequest();
  let searchTerm = cityBox.value;
  let searchUrl = `/search?q=${searchTerm}`;

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cityWeather = JSON.parse(xhr.responseText);
      console.log(cityWeather);
    }
  };
  xhr.open("GET", searchUrl, true);
  xhr.send();
};