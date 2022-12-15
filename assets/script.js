var api = `https://api.openweathermap.org/data/2.5/weather?appid=d22455c31574a84b22d1c94f4c33f19c
&q=`
var searchCity = document.querySelector('#searchCity')
var searchBtn = document.querySelector('#searchBtn')
var APIkey = `d22455c31574a84b22d1c94f4c33f19c`

var cityName = document.querySelector('#searchCity')

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
    })
}

function latlon(lat, lon) {
    var coordapi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}
    `
    fetch(coordapi).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(function (data) {
        console.log(data)
        var temp1 = ((data.list[0].main.temp - 273.15) * 1.8) + 32;
        var temp2 = ((data.list[8].main.temp - 273.15) * 1.8) + 32;
        var temp3 = ((data.list[16].main.temp - 273.15) * 1.8) + 32;
        var temp4 = ((data.list[24].main.temp - 273.15) * 1.8) + 32;
        var temp5 = ((data.list[32].main.temp - 273.15) * 1.8) + 32;

        var string1 = temp1.toFixed(1)
        var string2 = temp2.toFixed(1)
        var string3 = temp3.toFixed(1)
        var string4 = temp4.toFixed(1)
        var string5 = temp5.toFixed(1)


        document.querySelector('#time1').textContent = string1
        document.querySelector('#time2').textContent = string2
        document.querySelector('#time3').textContent = string3
        document.querySelector('#time4').textContent = string4
        document.querySelector('#time5').textContent = string5
    })
}

searchBtn.addEventListener('click', callCity)


// latlon(38.4666, -121.3177) [SAC COORDS]
// 38.4666
//- 121.3177

