import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Realtime school updates in engineering.
            <p> We dey for u</p>
          </h1>
          <p>
            Connect with thousands of upcoming engineers and leaders at all levels
            Stripe’s app allows you to get accurate and up-to-date information from the horse's mouth as quickly as possible.
          </p>
          <NavLink className='' to='/reg'><button className="btn">Start now</button></NavLink>
        </article>
        <article className="hero-images">
          <img src="./images/phone.svg" className="img" alt="" />
        </article>
      </div>
    </section>
  );
}

export default HomePage;




// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

// class homePage extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <section class="hero">
//       <div class="hero-center">
//         <article class="hero-info">
//           <h1>
//             Realtime school updates in engineering.
//             <p> We dey for u</p>
//           </h1>
//           <p>
//             Connect with thousands of upcoming engineers and leaders at all levels
//             Stripe’s app allow to to get accurate and up-to-date information from the horses mouth as quickly as possible.
//           </p>
//           <NavLink className='' to='/reg'><button class="btn">Start now</button></NavLink>
//         </article>
//         <article class="hero-images">
//           <img src="./images/phone.svg" class="img" alt="" />
//         </article>
//       </div>
//     </section>
//         );
//     }
// }
 
// export default homePage;