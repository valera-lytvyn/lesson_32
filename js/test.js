"use strict";

// let status = function (response) {
//    if (response.status !== 200) {
//      return Promise.reject(new Error(response.statusText));
//    }
//    return Promise.resolve(response);
//  };
//  let json = function (response) {
//    return response.json();
//  };
 
// function clickSearch() {
  

// function getData() {
//    fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=300ee175286ded52ffac455c4a1947b0`
//    )
//       .then(response => response.json())
//       .then(data => processingData(data))
//       .catch(err => console.log('wrong'))
// }

// getData()
// // console.log(data.name);
// // http://openweathermap.org/img/wn/10d@2x.png

// function processingData(arr) {
//    let nice = document.querySelector('.nice_day');
//    console.log(arr);
//    let iconCode = arr.weather[0].icon;
//    let icon = document.createElement('img');
//    icon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
//    nice.after(icon);
// }

let table = document.querySelector('city');
