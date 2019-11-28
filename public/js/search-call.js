let cityArray = [];

// function to use search query to search cities.js
const searchCities = () => {
  let searchTerm = cityBox.value;
  let xhr = new XMLHttpRequest();
  let searchUrl = `/search?q=${searchTerm}`;

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cityArray = JSON.parse(xhr.responseText);
      console.log(cityArray);
      populateDropDown();
    }
  };
  xhr.open("GET", searchUrl, true);
  xhr.send();
};

// function to append cities into a dropdown menu using DOM manipulation
const populateDropDown = () => {
  let dropDownInfo = document.querySelector(".dropdown-box");
  dropDownInfo.textContent = ""; // clear dropdown info

  cityArray.forEach(city => {
    // create a new list item for each city returned
    let liElement = document.createElement("li");
    liElement.classList.add("city-item");

    // attach matching text to city returned
    let matchingText = document.createElement("span");
    matchingText.classList.add("matching-text");
    matchingText.textContent = city.slice(0, cityBox.value.length);

    // attach remaining text to city returned
    let remainingText = document.createElement("span");
    remainingText.classList.add("remaining-text");
    remainingText.textContent = city.slice(cityBox.value.length);

    // append each city (matching text AND remaining text) to dropdown menu
    liElement.appendChild(matchingText);
    liElement.appendChild(remainingText);
    dropDownInfo.appendChild(liElement);
    liElement.addEventListener("click", chooseOption);
  });
};

cityBox.addEventListener("input", searchCities);
