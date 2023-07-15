import React, { Component } from 'react';

const Movie = ({match, history}) => {
     
    const handleSubmit = () => e => {
      e.preventDefault()
      e.currentTarget.value = ''
      
      console.log(e.currentTarget.value)
    }
        return (
        <div>

            <h1>
                Movie Form {match.params.id}
            </h1>
                 <form onSubmit={handleSubmit()}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    placeholder="Enter Movie Title"
    value={match.params.title}/>
  </div>
  
  <div class="form-group">
  <label for="exampleFormControlInput1">Genre</label>
    <input type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    placeholder="Rate"
    value={match.params.genre}/>
  </div>
  
  <div class="form-group">
  <label for="exampleFormControlInput1">Rate</label>
    <input type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    placeholder="Movie rating"
    value={match.params.rate}/>
  </div>
  <div class="form-group">
  <label for="exampleFormControlInput1">Number In Stock</label>
    <input type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    placeholder="Stock"
    value={match.params.stock}
    onMouseOver={handleSubmit()}/>
  </div>


</form>

        <button  className='btn btn-primary m-2'>Edit</button>
    </div>
            
       );
    }
// <h1>
            //     Movie form {match.params.id}
            // </h1>
            // <button className='btn btn-primary' 
            // onClick={() => history.push('./movies')}>Save</button>
 
export default Movie;