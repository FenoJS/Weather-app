var axios = require('axios');


var baseUrl = 'api.openweathermap.org/data/2.5';
var API_KEY = 'dd09cdfaec1067c301af6b19debf2493';
var lang = { en: '&lang=en',
             pl: '&lang=pl'

}




function getCurrentWeather(city){
  return  axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&type=accurate&APPID='+ API_KEY + '&units=metric' + lang.pl)
    .then(function(weather){
        return weather.data
    });

}

function getForecast(city){
    return  axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city +'&type=accurate&APPID='+ API_KEY + '&units=metric&' + lang.pl)
    .then(function(weather){
        return weather.data
    });
}


var dayMapEn = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var dayMapPl = {
  "0":"Niedziela",
  "1":"Poniedziałek",
  "2":"Wtorek",
  "3":"Środa",
  "4":"Czwartek",
  "5":"Piątek",
  "6":"Sobota"
};


var monthsMapEn = {
  "0":"Jan ",
  "1":"Feb ",
  "2":"Mar ",
  "3":"Apr ",
  "4":"May ",
  "5":"June ",
  "6":"July ",
  "7":"Aug ",
  "8":"Sept ",
  "9":"Oct ",
  "10":"Nov ",
  "11":"Dec "
};

var monthsMapPl = {
  "0":".01",
  "1":".02",
  "2":".03",
  "3":".04",
  "4":".05",
  "5":".06",
  "6":".07",
  "7":".08",
  "8":".09",
  "9":".10",
  "10":".11",
  "11":".12"
};


function convertDate(unixTime){
    var date = new Date(unixTime * 1000);
    var day = dayMapPl[date.getDay()];
    var month = date.getDate() + monthsMapPl[date.getMonth()];
    return day + ', ' + month
     

}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


module.exports = {
    getCurrentWeather: getCurrentWeather,
    getForecast: getForecast,
    convertDate: convertDate,
    capitalizeFirstLetter: capitalizeFirstLetter
}