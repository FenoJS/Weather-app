var React = require('react');
var api = require('../utils/api');




function Details(props){
    var props = props.location.state
    var date = api.convertDate(props.dt);
    var icon = props.weather[0].icon;
    return (
        <div className='weather-container'>
            <img className='weather-img' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
            <h2>{date}</h2>
            <p>{api.capitalizeFirstLetter(props.city)}</p>
            <p>{props.weather[0].description}</p>
            <p>Temperatura max: {parseInt(props.temp.max)} &deg;C</p>
            <p>Temperatura min: {parseInt(props.temp.min)} &deg;C</p>
            <p>Ciśnienie: {parseInt(props.pressure)} hPa</p>
            <p>Wilgotność: {props.humidity} %</p>
        </div>
    )
}





module.exports = Details;