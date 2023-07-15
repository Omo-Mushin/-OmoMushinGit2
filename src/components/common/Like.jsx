import React, { Component } from 'react';

class Like extends Component {
    state = {  } 
    handleLike() {
        
    }
    render() { 
        let classes = 'fa fa-heart'
        if (this.props.liked) classes += '-o'
        
        return (<i onClick={this.props.onClick} style={{cursor: 'pointer'}}
         className= {this.props.liked ? 'fa fa-heart' : 'fa fa-heart-o'} aria-hidden='true'>
       
            
            </i>);
    }
}
 
export default Like;