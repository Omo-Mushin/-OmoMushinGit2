import React, { Component } from 'react';

import StripePagination from './paginationForStripe';
import { NavLink } from 'react-router-dom';

class SideBarBottom extends Component {
   
    render() { 

      
        return (
            <div className='side-bar-bottom'>
                 <section className="container" style={{cursor: 'pointer'}} >
                    {this.props.persons.map(post => (
                        
                        <li className='list_group'>
                        
                        <article className="review">
                        <div className="img-container">
                          <img src={post.img} id={post.id} alt="" sizes={20} />
                        </div>
                        <h4 className="author">{post.name}</h4>
                        <p className="job">{post.job}</p>
                        <NavLink to={`/post/${post.name}/${post.id}/${post.text}
                        /${post.job}`} key={post.id}>
                          <p className="info">
                          {post.text}
                        </p> 
                        </NavLink>
                        
                        <div className='delete-like-group'>
                            {/* <Like onClick={() => this.props.onLike(post)} liked={post.liked} /> */}
                            <button type="button" class="btn btn-danger m-2" 
                            onClick={() => this.props.onDelete(post)}>Delete</button>
                        </div> 
                      </article>
                        
                      
                      </li>
                        
                        
        ))}
      </section>
       {/* <NavLink to=
                        {`/post/${post.name}/${post.id}/${post.text}
                        /${post.job}`} key={post.id}>
                            <article className="review"> */}
                            {/* <div className='delete-like-group'>
                        <Like onClick={() => this.props.onLike(post)} liked={post.liked} />
                        <button type="button" class="btn btn-danger"
                         onClick={() => this.props.handleDelete(post)}>Delete</button>
                        </div> */}

      <div className='pagn'>
      <StripePagination onSwitch={ this.props.switchPage }
              itemCount={this.props.reviews.length} pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}/>
      </div>
                 </div>
        );
    }
}
 
export default SideBarBottom;
{/* <div className="button-container">
              <button className="prev-btn">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="next-btn">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div> */}
           
            {/* <button class="random-btn">surprise me</button> */}