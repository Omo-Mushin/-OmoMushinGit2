import React, { Component } from 'react';

class NewMovie extends Component {
    state = { details: {
        title : '', genre: '',
        rate : '', numberInStock : ''
    } }
    
    handleSubmit = e => {
        e.preventDefault();
        console.log(e.currentTarget.value)
    }

    handleChange = e => {
        const details = {...this.state.details}
        details[e.currentTarget.name] = e.currentTarget.value;
        
        this.setState({details : details})
        console.log(details)
    }
    render() { 
        return (
        <form onSubmit={this.handleChange}>
            <div class="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" class="form-control" 
              name='title'
              value={this.state.details.title}
              onChange={this.handleChange} 
              aria-describedby="emailHelp" 
              placeholder="Enter email"/>
              
            </div>
            <div class="form-group">
              <label htmlFor="">Genre</label>
              <input type="text" class="form-control" 
              id="" placeholder="Genre"
              name='genre'
              onChange={this.handleChange}
              value={this.state.details.genre}/>
            </div>
            <div class="form-group">
              <label htmlFor="">Rate</label>
              <input type="text" class="form-control" 
              value={this.state.details.rate} 
              name='rate'
              onChange={this.handleChange}
              placeholder="Rate"/>
            </div>
            <div class="form-group">
              <label htmlFor="">Stock</label>
              <input type="number" class="form-control" 
              name="stock" 
              onChange={this.handleChange}
              value={this.state.details.numberInStock}
              placeholder='stock number' />
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>);
    }
}
 
export default NewMovie;