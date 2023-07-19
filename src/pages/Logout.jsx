import React, { Component } from 'react';
import { dataBase } from '../app/firebase';
import {signOut }from 'firebase/auth';


class Logout extends Component {
    async componentDidMount() { 
        await signOut(dataBase);
        localStorage.removeItem('token')
        windows.location = '/'
     }
    render() { 
        return (
            null
        );
    }
}
 
export default Logout;