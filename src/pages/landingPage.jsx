import React, { Component } from 'react';

class landingPage extends Component {
    state = {  } 
    render() { 
        return (
        <div>
            <div class="banner">
        <div class="container">
          <h1>DaddyGO project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eos
            neque sunt in? Id, necessitatibus quos quisquam distinctio
            laudantium fugiat?
          </p>
          <a href="#tours" class="scroll-link btn btn-white">explore tours</a>
        </div>
      </div>
    
    
    <section id="about" class="section">
      <div class="title">
        <h2>about <span>us</span></h2>
      </div>
    </section>

    <footer class="section">
      <p>
        copyright &copy; backroads travel tours company
        <span id="date"></span>. all rights reserved
      </p>
    </footer>
        </div>)
    }
}
 
export default landingPage;