var React = require('react');
var WeatherInput = require('./WeatherInput');
var Link = require('react-router-dom').Link;


function Header(props){
    return (
        <div className='header'> 
            <Link to='/'> <h1 className='header-logo'>Pogodynka</h1> </Link>
             <WeatherInput  direction={'row'} 
                            onSubmit={function (city) {
                                props.history.push({
                                pathname: '/forecast',
                                search: '?city=' + city
                                });
                            }}/> 
        </div>
    )
}


module.exports = Header;