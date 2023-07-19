import React, { Component } from 'react';
import Navigation from '../navigation';
import Vidly from '../components/vidly';
import Movie from './linkComponents/Movie'
 import Rentals from './linkComponents/Rentals';
 import Customers from './linkComponents/Customers';
 import NotFound from './linkComponents/NotFound';
 import { Route , Redirect, Switch} from 'react-router-dom';
import LoginForm from './linkComponents/Login';
import Register from './linkComponents/Register';
import NewMovie from './linkComponents/NewMovie';



class Apps extends Component {
    state = {  } 
    render() { 
        return (<div>
            <Navigation />
                {/* <Vidly /> */}
                <Switch>
            <div className='container'>
                <Route path='/login'  component={LoginForm} />
                <Route path='/newMovie' component={NewMovie} />
                <Route path='/movie/:id/:title/:genre/:stock/:rate' exact component={Movie} />
                <Route path='/movies' component={Vidly} />
                <Route path='/register' component={Register} />
                <Route path='/customers' component={Customers} />
                <Route path='/rentals' component={Rentals} />
                <Route path='/not-found' component={NotFound} />
                <Redirect from='/' exact to='/movies'/>
                <Redirect to='/not-found'/>
            </div>
            </Switch>
        </div>);
    }
}
 
export default Apps;