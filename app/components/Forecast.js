var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string'); 
var DayItem = require('./DayItem');



class Forecast extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
            this.state = {
                data: '',
                loading: true

            }
            this.handleClick = this.handleClick.bind(this)
            
        }


    handleRequest(city){
        this.setState(function(){
            return {
                loading: true
            }
        })
    
    }



    handleClick(city){
       city.city = this.city
       this.props.history.push({
           pathname: '/details/' + this.city,
           state: city
       })
    }

             
    shouldComponentUpdate(nextProp, nextState) {
        return nextProp === this.props;
    }
        
    componentDidMount(){
        this.city = queryString.parse(this.props.location.search).city
            api.getForecast(this.city)
            .then(function(data){
                this.setState(function(){
                return {
                    data: data,
                    loading: false
                }
            })
            
                
            }.bind(this))
    
     }

     componentWillReceiveProps(nextProps) {
        this.city = queryString.parse(nextProps.location.search).city;
        api.getForecast(this.city)
            .then(function(data){
                this.setState(function(){
                return {
                    data: data,
                    loading: false
                }
            })
            
                
            }.bind(this))
        
     }
  
     

//<h1 className='forecast-header'>{this.city}</h1>
    render(){
        console.log(this.state)
        return (
            this.state.loading === true ? <h1 > Loading </h1> :
             
            <div>
                <h1 className='forecast-header'>{api.capitalizeFirstLetter(this.city)}</h1>
                <div className='forecast-container'>
                     {this.state.data.list.map(function(item){
                        return (
                            <DayItem onClick={this.handleClick.bind(null, item)} key={item.dt} day={item}/> 
                            )
                    },this)} 
                </div>
            </div>
        )
    }
}




module.exports = Forecast;