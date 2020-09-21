var apiKey = "7da4fa52d94d44ab8c4201938201409";
var baseURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

//stuff for homework
var forcastBaseURL = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=`;
var forcastEndURL = `&days=5`;
var storedZipOrCity = {};

function getData(fullURL) {
    $.get(fullURL, function (data){
        console.log(data); 
        $(".contentOne").html(
            `<p>Condition: ${data.current.condition.text}</p>
            <p>Real Feel: ${data.current.feelslike_f}F</p>
            <p>Wind: ${data.current.wind_mph} mph</p>
            <p>Wind Direction: ${data.current.wind_dir}</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Chance of Rain: ${data.current.precip_in}%</p>
            <p>Uv Index: ${data.current.uv}</p>
            <p>Vison: ${data.current.vis_miles} miles</p>
            `
        )
        
        $(".cityDiv").html(`<h2>${data.location.name}</h2>`)
        $(".currentDiv").html(`<p><img src="${data.current.condition.icon}"</p>`)
        $(".currentTempDiv").html(`<p>${data.current.temp_f}°F</p>`)
        $(".tempCDiv").html(`<p>${data.current.temp_c}°C</p>`)
        $(".lastUpdatedDiv").html(`<p>Updated: ${data.current.last_updated}</p>`)
             

    })

.catch(function (error){
    console.log(error);
    // console.log("zip code bad");
    alert("Invalid Input or no connection");
    });
}

//forcast data function
function getDataForcast(forcastURL) {
    
    $.get(forcastURL, function (data){
        console.log(data); 
        $(".dayOne").html(
            `<h2>Day 1</h2>
            <p> <img src="${data.forecast.forecastday[0].day.condition.icon}" </p>
            <p>${data.forecast.forecastday[0].day.condition.text} </p>
            <p>High of ${data.forecast.forecastday[0].day.maxtemp_f}°F </p>
            <p>Low of ${data.forecast.forecastday[0].day.mintemp_f}°F</p>
            <p>Chance of rain ${data.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
            `
        )
        $(".dayTwo").html(
            `<h2>Day 2</h2>
            <p> <img src="${data.forecast.forecastday[1].day.condition.icon}" </p>
            <p>${data.forecast.forecastday[1].day.condition.text} </p>
            <p>High of ${data.forecast.forecastday[1].day.maxtemp_f}°F </p>
            <p>Low of ${data.forecast.forecastday[1].day.mintemp_f}°F</p>
            <p>Chance of rain ${data.forecast.forecastday[1].day.daily_chance_of_rain}%</p>
            `
        )
        $(".dayThree").html(
            `<h2>Day 3</h2>
            <p> <img src="${data.forecast.forecastday[2].day.condition.icon}" </p>
            <p>${data.forecast.forecastday[2].day.condition.text} </p>
            <p>High of ${data.forecast.forecastday[2].day.maxtemp_f}°F </p>
            <p>Low of ${data.forecast.forecastday[2].day.mintemp_f}°F</p>
            <p>Chance of rain ${data.forecast.forecastday[2].day.daily_chance_of_rain}%</p>
            `
        )
            
    })
}

function initListeners(){
    
    $("#getWeather").click(function(){
        var zip = $("#zipcode").val();
        var fullURL = baseURL + zip;
        //disables forcast button until zip or city is entered
        document.getElementById("getForcast").disabled = false;
        storedZipOrCity = zip;
        // console.log(fullURL);
        
        getData(fullURL);
        // console.log(zip)
        
        
    });
}
function forcastListeners(){

    
    $("#getForcast").click(function(){
        
        console.log(storedZipOrCity);
        var forcastURL = forcastBaseURL + storedZipOrCity + forcastEndURL;
        console.log(forcastURL);
        getDataForcast(forcastURL);
    });
}

$(document).ready(function() {
    initListeners();
    forcastListeners()
});