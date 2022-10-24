"use strict";

let arrCities = [
  "Kyiv",
  "Lviv",
  "Odesa",
  "Dnipro",
  "Lutsk",
  "Simferopol",
  "Mariupol",
  "Ternopil",
  "Poltava",
  "Zaporizhzhia",
  "Ivano-Frankivsk",
];
let cityName;
let name;
let temperature;
let weatherIcon;
let iconCode;
let temp;
let button = document.querySelector(".buttonUpdate");
button.onclick = function () {
  getDataWeather(arrCities);
};

function getDataWeather(arr) {
  arrCities.forEach((item, index) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${item}&units=metric&appid=300ee175286ded52ffac455c4a1947b0`
    )
      .then((response) => response.json())
      .then((data) => createPage(index, data));
  });
}

function createPage(index, arr) {
  name = arr.name;
  iconCode = arr.weather[0].icon;
  temp = Math.round(arr.main.temp);
  cityName = document.getElementById(`name${index}`);
  cityName.textContent = name;
  temperature = document.getElementById(`temperature${index}`);
  temperature.textContent = `${temp}°C`;
  weatherIcon = document.getElementById(`weatherIcon${index}`);
  weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
getDataWeather(arrCities);