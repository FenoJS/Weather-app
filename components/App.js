var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Header = require('./header');
var Home = require('./home');
var Forecast = require('./Forecast');
var Details = require('./Details');



class App extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <Route path="/" component={Header}/>
                <Route exact path="/" component={Home}/>
                <Route path="/forecast" component={Forecast}/>
                <Route path="/details/:city" component={Details}/>
            </div>
            </Router>
        )
    }
}

module.exports = App;