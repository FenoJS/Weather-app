var React = require('react');
var WeatherInput = require('./WeatherInput');



function Home(props){
    return (
        <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
            <h2>
                Wpisz Miasto 
            </h2>
            <WeatherInput onSubmit={function (city) {
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    })
                  }}/>
        </div>
         
    )
}




module.exports = Home;