const api_key = "6f0e94ff2fa4ebf28f5c3733c57d5997";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiForcast_url = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const searchBox = document.getElementById('button');
let inputSearch = document.getElementById('prompt');
const history = document.getElementById('history');
const cityHistory = document.getElementById("cityHistory")
const firstHis = document.getElementById("firstHis")
const secondHis = document.getElementById("secondHis")
const thirdHis = document.getElementById("thirdHis")
const fourthHis = document.getElementById("fourthHis")

console.log(history)
let his = [];

searchBox.addEventListener("click", event => {
    event.preventDefault();
    fetch(api_url + inputSearch.value + `&appid=${api_key}`)
        .then(response => response.json())
        .then(data => {
            his.unshift(inputSearch.value)
            console.log(his)
            recentSearch()
            document.querySelector(".cityName").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".desciption").innerHTML = data.weather[0].description;
            document.querySelector(".humidity").innerHTML = "humidity :" + data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = "Wind :" + data.wind.speed + "km/h";
            const iconId = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;
            document.getElementById('weatherIcon').src = iconUrl;

            inputSearch.value = "";

        })
})

                 fetch(apiForcast_url + `&appid=${api_key}`)
                 .then(response => response.json())
                 .then(data => {
                    console.log(data)
                 }
                        // displayForecast(data);
                 )

                //  function displayForecast(data) {
                //     const forecast = document.getElementById('forecast');
                //     forecast.innerHTML = '';
        
                //     for (let i = 0; i < data.list.length; i += 8) {
                //         const forecastData = data.list[i];
                //         const date = new Date(forecastData.dt * 1000);
                //         const temperature = Math.round(forecastData.main.temp - 273.15);
                //         const description = forecastData.weather[0].description;
        
                //         forecast.innerHTML += `
                //         <div class="flex column gap-1em">
                //                 <p class="font"><b> ${description} ${temperature} ${date}</b></p>
                //             <div id="itemsContainer${i}" class="flex gap-1em wrap items-container"> 
                //             </div>
                //         </div>
                //     `
                //     }
                // }
// let foundCity = hus.find(city => inputSearch.value)

const recentSearch = () => {
    // his.reverse()
    his.forEach((city, indx) => {
        if (indx == 0) {
            firstHis.innerHTML = city
        }
        if (indx == 1) {
            secondHis.innerHTML = city
        }
        if (indx == 2) {
            thirdHis.innerHTML = city
        }
        if (indx == 3) {
            fourthHis.innerHTML = city
        }
    })
}

firstHis.addEventListener("click", event => {
    event.preventDefault();
    fetch(api_url + firstHis.innerText + `&appid=${api_key}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".cityName").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".desciption").innerHTML = data.weather[0].description;
            document.querySelector(".humidity").innerHTML = "humidity :" + data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = "Wind :" + data.wind.speed + "km/h";
            const iconId = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;
            document.getElementById('weatherIcon').src = iconUrl;

            inputSearch.value = "";

        })
})

secondHis.addEventListener("click", event => {
    event.preventDefault();
    fetch(api_url + secondHis.innerText + `&appid=${api_key}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".cityName").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".desciption").innerHTML = data.weather[0].description;
            document.querySelector(".humidity").innerHTML = "humidity :" + data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = "Wind :" + data.wind.speed + "km/h";
            const iconId = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;
            document.getElementById('weatherIcon').src = iconUrl;

            inputSearch.value = "";

        })
})

thirdHis.addEventListener("click", event => {
    event.preventDefault();
    fetch(api_url + thirdHis.innerText + `&appid=${api_key}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".cityName").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".desciption").innerHTML = data.weather[0].description;
            document.querySelector(".humidity").innerHTML = "humidity :" + data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = "Wind :" + data.wind.speed + "km/h";
            const iconId = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;
            document.getElementById('weatherIcon').src = iconUrl;

            inputSearch.value = "";

        })
})

fourthHis.addEventListener("click", event => {
    event.preventDefault();
    fetch(api_url + fourthHis.innerText + `&appid=${api_key}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".cityName").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".desciption").innerHTML = data.weather[0].description;
            document.querySelector(".humidity").innerHTML = "humidity :" + data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = "Wind :" + data.wind.speed + "km/h";
            const iconId = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;
            document.getElementById('weatherIcon').src = iconUrl;

            inputSearch.value = "";

        })
})




function dayTimes() {
    const currentDate = new Date();
    const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const currentTime = currentDate.toLocaleTimeString('en-US');

    dayTime.innerHTML = `${day}<br>${currentTime}`;
}

dayTimes()








