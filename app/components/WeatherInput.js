var React = require('react');
var PropTypes = require('prop-types');
var ReactRouter = require('react-router-dom');




//var queryString = require('query-string');


class WeatherInput extends React.Component {
    constructor(props){
        
        console.log(props)
        super(props);
        this.state = {
            city: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.onSubmit(this.state.city)
        this.setState(function(){
            return {
                city: ''
            }
        })
    }




     handleChange(event){
       var value = event.target.value;
       this.setState(function(){
           return {
               city: value
           }
       })
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className='form-container' style={{flexDirection: this.props.direction}}>
                <input type="text" className='weather-input' placeholder='Warszawa, Polska' value={this.state.city} onChange={this.handleChange}/>
                <button type='submit' className='weather-btn' >
                    Pogoda
                </button>
            </div>
        </form>
        )
    }
}

// WeatherInput.PropTypes = {
//     direction: PropTypes.string.isRequired
// }

WeatherInput.defaultProps = {
    direction: 'column'
}





module.exports = WeatherInput;