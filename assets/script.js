var api = 'https://api.openweathermap.org/data/2.5/onecall?appid=afafb1b6438a7da06c95113c0745c9ac'
var searchCity = document.querySelector('#searchCity')
var searchBtn = document.querySelector('#searchBtn')

function callCity() {
    if (searchCity.textContent = 'San Diego') {
        var finalApi = api + 'lat=32.7157&lon=117.1611'
    }
    fetch(finalApi).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(function (data) {
        console.log(data)
    })
}

searchBtn.addEventListener('click', callCity)

