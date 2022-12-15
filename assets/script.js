var api = `https://api.openweathermap.org/data/2.5/weather?appid=d22455c31574a84b22d1c94f4c33f19c
&q=`
var searchCity = document.querySelector('#searchCity')
var searchBtn = document.querySelector('#searchBtn')
var APIkey = `d22455c31574a84b22d1c94f4c33f19c`

var cityName = document.querySelector('#searchCity')
var counter = 0

function callCity() {
    let finalApi = api + cityName.value.trim()
    fetch(finalApi).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(function (data) {
        console.log(data)
        latlon(data.coord.lat, data.coord.lon)
        // document.querySelector('#hero').classList.remove("hidden")
    })
}

function latlon(lat, lon) {
    var coordapi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}
    `
    counter++;
    fetch(coordapi).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(function (data) {
        console.log(data)
        var temp1 = ((data.list[4].main.temp - 273.15) * 1.8) + 32;
        var temp2 = ((data.list[12].main.temp - 273.15) * 1.8) + 32;
        var temp3 = ((data.list[20].main.temp - 273.15) * 1.8) + 32;
        var temp4 = ((data.list[28].main.temp - 273.15) * 1.8) + 32;
        var temp5 = ((data.list[36].main.temp - 273.15) * 1.8) + 32;

        var string1 = temp1.toFixed(1)
        var string2 = temp2.toFixed(1)
        var string3 = temp3.toFixed(1)
        var string4 = temp4.toFixed(1)
        var string5 = temp5.toFixed(1)

        var CityName = data.city.name

        document.querySelector('#cityName').textContent = CityName

        document.querySelector(`#hist${counter}`).textContent = CityName

        var currWeather1 = data.list[4].weather[0].main
        var currWeather2 = data.list[12].weather[0].main
        var currWeather3 = data.list[20].weather[0].main
        var currWeather4 = data.list[28].weather[0].main
        var currWeather5 = data.list[36].weather[0].main

        document.querySelector('#weather1').src = `${currWeather1}.jpg`
        document.querySelector('#weather2').src = `${currWeather2}.jpg`
        document.querySelector('#weather3').src = `${currWeather3}.jpg`
        document.querySelector('#weather4').src = `${currWeather4}.jpg`
        document.querySelector('#weather5').src = `${currWeather5}.jpg`



        //if data.list[4].weather[0].main = "Rain" display rain
        //if data.list[4].weather[0].main = "Clear" display clear





        document.querySelector('#time1').textContent = string1 + "F";
        document.querySelector('#time2').textContent = string2 + "F";
        document.querySelector('#time3').textContent = string3 + "F";
        document.querySelector('#time4').textContent = string4 + "F";
        document.querySelector('#time5').textContent = string5 + "F";

        document.querySelector('#date1').textContent = data.list[4].dt_txt
        document.querySelector('#date2').textContent = data.list[12].dt_txt
        document.querySelector('#date3').textContent = data.list[20].dt_txt
        document.querySelector('#date4').textContent = data.list[28].dt_txt
        document.querySelector('#date5').textContent = data.list[36].dt_txt

        document.querySelector('#wind1').textContent = data.list[4].wind.speed + "mph";
        document.querySelector('#wind2').textContent = data.list[12].wind.speed + "mph";
        document.querySelector('#wind3').textContent = data.list[20].wind.speed + "mph";
        document.querySelector('#wind4').textContent = data.list[28].wind.speed + "mph";
        document.querySelector('#wind5').textContent = data.list[36].wind.speed + "mph";

        document.querySelector('#humidity1').textContent = data.list[4].main.humidity + "%";
        document.querySelector('#humidity2').textContent = data.list[12].main.humidity + "%";
        document.querySelector('#humidity3').textContent = data.list[20].main.humidity + "%";
        document.querySelector('#humidity4').textContent = data.list[28].main.humidity + "%";
        document.querySelector('#humidity5').textContent = data.list[36].main.humidity + "%";


    })
}

searchBtn.addEventListener('click', callCity)
document.querySelector('#hist1').addEventListener('click', recallCity1)
document.querySelector('#hist2').addEventListener('click', recallCity2)
document.querySelector('#hist3').addEventListener('click', recallCity3)
document.querySelector('#hist4').addEventListener('click', recallCity4)
document.querySelector('#hist5').addEventListener('click', recallCity5)

function recallCity1() {
    let finalApi = api + document.querySelector('#hist1').textContent
    fetch(finalApi).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(function (data) {
        console.log(data)
        latlon(data.coord.lat, data.coord.lon)
        // document.querySelector('#hero').classList.remove("hidden")
    })
}

function recallCity2() {
    let finalApi = api + document.querySelector('#hist2').textContent
    fetch(finalApi).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(function (data) {
        console.log(data)
        latlon(data.coord.lat, data.coord.lon)
        // document.querySelector('#hero').classList.remove("hidden")
    })
}

function recallCity3() {
    let finalApi = api + document.querySelector('#hist3').textContent
    fetch(finalApi).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(function (data) {
        console.log(data)
        latlon(data.coord.lat, data.coord.lon)
        // document.querySelector('#hero').classList.remove("hidden")
    })
}

function recallCity4() {
    let finalApi = api + document.querySelector('#hist4').textContent
    fetch(finalApi).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(function (data) {
        console.log(data)
        latlon(data.coord.lat, data.coord.lon)
        // document.querySelector('#hero').classList.remove("hidden")
    })
}

function recallCity5() {
    let finalApi = api + document.querySelector('#hist5').textContent
    fetch(finalApi).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(function (data) {
        console.log(data)
        latlon(data.coord.lat, data.coord.lon)
        // document.querySelector('#hero').classList.remove("hidden")
    })
}

// latlon(38.4666, -121.3177) [SAC COORDS]
// 38.4666
//- 121.3177

