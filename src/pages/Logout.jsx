import React, { useEffect } from 'react';
import { dataBase } from '../app/firebase';
import { signOut } from 'firebase/auth';

const Logout = () => {
  useEffect(() => {
    const logoutUser = async () => {
      await signOut(dataBase);
      localStorage.removeItem('token');
      window.location = '/';
    };

    logoutUser();
  }, []);

  return null;
};

export default Logout;




// import React, { Component } from 'react';
// import { dataBase } from '../app/firebase';
// import {signOut }from 'firebase/auth';


// class Logout extends Component {
//     async componentDidMount() { 
//         await signOut(dataBase);
//         localStorage.removeItem('token')
//         windows.location = '/'
//      }
//     render() { 
//         return (
//             null
//         );
//     }
// }
 
// export default Logout;