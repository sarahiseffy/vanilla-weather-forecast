function searchCity(city) { //1st function for the city for API data retrieval

  let apiKey = "47c53bba2097318c33196010f07cot74";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) { //function for the search bar to prevent blank search
  event.preventDefault();

  let searchInput = document.querySelector("#search-input"); //this will target the form that will the user will input.

  searchCity(searchInput.value); // this is added for API function use
}

let searchFormElement = document.querySelector("#search-form-id"); //targets the search form
searchFormElement.addEventListener("submit", handleSearchSubmit); //this will activate the button whenever the user clicks the search button

searchCity("Paris"); //to default to this city once refreshed

function refreshWeather(response) { //2nd function for the temperature for API data retrieval
  let cityElement = document.querySelector("#city"); //to target the city variable make sure to add id
  let temperatureElement = document.querySelector("#weather-app-temp-value"); //targets the weather temperature value element with the id
  let temperature = response.data.temperature.current;
  let descriptionElement = document.querySelector("#weather-description"); //targets the weather description value element
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000); // new Date code to parse the time code
  let iconElement = document.querySelector("#weather-app-icon"); //this will target the icon element value

  cityElement.innerHTML = `${response.data.city}`; // this will change the city element with what is being logged on the searchInput
  temperatureElement.innerHTML = Math.round(temperature); //this will change the temperature related to the city data the user has searched.
  descriptionElement.innerHTML = response.data.condition.description; //targets the description value element id
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`; //targets the humidity value element id
  windElement.innerHTML = `${response.data.wind.speed}km/h`; //targets the win value element id
  timeElement.innerHTML = formatDate(date); //this will change the time using function created to format date properly
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon">`; //this will change the icon and pull image from API
}

function formatDate(date) { //create this function to get better format of the time

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    //if the time is less than 10 hours, to add "0" before the minutes value (example 1:01 instead of 1:1)
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`; //this will return the proper format output
}
