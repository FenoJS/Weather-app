var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');




function DayItem(props){
    var date = api.convertDate(props.day.dt);
    var icon = props.day.weather[0].icon;
    return (

        <div onClick={props.onClick} className='day-container'>
            <img className='weather-icon' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
            <h2 className='weather-temp'>
                {parseInt(props.day.temp.day)} &deg;C
            </h2>
            <p>{date}</p>  
              

        </div>
    )
}

DayItem.PropTypes = {
    day: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired

}


module.exports = DayItem;