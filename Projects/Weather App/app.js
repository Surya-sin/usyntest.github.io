let long;
let lat;
let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
let locationIcon = document.querySelector('.weather-icon');
let degree = document.querySelector('.degree-section');
let unit = document.querySelector('span');

let temperature;
let timeZone;
let description;
let icon;

window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // console.log(long, lat);


            // const proxy = 'https://cors-anywhere.herokuapp.com/';


            // const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${long},${lat}`;
            // const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

            //api.openweathermap.org/data/2.5/weather?lat=28.7148699&lon=77.1286181&appid=1d45dd59c0da34fd646aa7f7347f64b8



            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1d45dd59c0da34fd646aa7f7347f64b8`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    temperature = (data.main.temp);
                    timeZone = `${data.name}, ${data.sys.country}`;
                    description = data.weather[0].description;
                    icon = data.weather[0].icon;
                    // console.log(description);
                    // console.log(timeZone)
                    // console.log(temperature);


                    //set DOM Elements
                    temperatureDegree.textContent = Math.floor(temperature - 273.15);
                    // temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = timeZone;
                    // let iconHTML = `<img src="./icons/${icon}.png">`
                    locationIcon.innerHTML = `<img src="./icons/${icon}.png">`;
                });
        });
    }
    // else {
    //     long = 77.1286181;
    //     lat = 28.7148699;
    //     window.alert('Please Enable Your Location For Correct Information');
    // }
    // (0K − 273.15) × 9/5 + 32
})


degree.addEventListener('click', function () {
    if (unit.innerHTML === 'C') {
        temperatureDegree.innerHTML = Math.floor((temperature - 273.15) * 9 / 5 + 32);
        unit.innerHTML = 'F';
    } else {
        temperatureDegree.textContent = Math.floor(temperature - 273.15);
        unit.innerHTML = 'C';
    }
})

