import React from 'react';
import { createRoot } from 'react-dom/client';
 import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import './webPage.css'
import reportWebVitals from './reportWebVitals';
import './index.css';
// import Header from './Header'
import 'bootstrap/dist/css/bootstrap.css'
// import Counter from './components/counter';
import 'font-awesome/css/font-awesome.css';
import cors from 'cors';
import { reduceRight } from 'lodash';
import MainApp from './app/MainApp';
// import Apps from './Apps';
// // //  import Counters from './components/counters';
// import Nav from './nav1';
import AppStore from './appParts/sidebar';
import './nav1.css'
import './sideBar.css'
import './MainApp.css'
import './feed.css'
import './sideBarBottom.css'
import './home.css'
import './landingPage.css'


const container = document.getElementById('root');
const root = createRoot(container);
// app.use(cors ({
//    origin: 'http://localhost:3000',

// }))
root.render(
  <BrowserRouter>
     <React.StrictMode>
        <Provider store={store}> 
         <MainApp />
         </Provider>
      </React.StrictMode> 
    </BrowserRouter>
       


 

  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
{/* <React.StrictMode>
//         <Provider store={store}>
//           <BrowserRouter>
//             {/* <Nav /> */}
//             <MainApp />
//           </BrowserRouter>
//         </Provider>
// </React.StrictMode> */}


