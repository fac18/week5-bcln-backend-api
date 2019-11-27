const cityBox = document.querySelector('input[name="cityBox"]');
const searchButton = document.querySelector("#search-button");

// if city is typed in and search button is selected, make weather API request
searchButton.addEventListener("click", () => {
  event.preventDefault();
  if (cityBox.value) {
    // weather API call goes here
  }
});

// if city is selected from dropdown menu, make weather API request
const optionSelect = () => {
  if (cityBox.value) {
    // weather API call goes here
  }
};

const chooseOption = event => {
  let optionText = event.currentTarget.textContent;
  cityBox.value = optionText;
  optionSelect();
};
