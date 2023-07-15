import React, { Component } from 'react';

export default class Counter extends Component{
    // state = {
    //     value: this.props.item.value ,
    //     imageUrl: 'https://th.bing.com/th/id/R.226a4310e3391b5bda7cf9dcdcc1e9fc?rik=fsyXNseACKRhqQ&pid=ImgRaw&r=0',
    //     tags : []
    // }
    // styles = {
    //     fontSize : '10px',
    //     fontWeight: 'bold',
    //     width: 55
    // }
    

    
    
    render() {
        console.log('props', this.props)
        const {value: count, imageUrl,tags} = this.props.item;
        
        return ( 
            <div>
                {/* <img style= {this.styles} src={imageUrl} alt="" /> */}
                {this.props.children}
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                 <button onClick={ () => this.props.onIncrement(this.props.item)} 
                className='btn btn-secondary btn-sm'>+</button>
                 
                <button onClick= {() => this.props.onRemove(this.props.item)} 
                className='btn btn-secondary btn-sm m-2'>-</button>
                <button onClick={() => this.props.onDelete(this.props.item.id)} className='btn btn-danger btn-sm m-2'>
                   x
                </button>
            </div>
        )
    }
    // renderTags() {
    //     const {count, imageUrl,tags} = this.state;
    //     if (tags.length === 0) return <p>there are no tags</p>;
    //     return <ul>
    //             {tags.map(tag => <li key={tag}>{tag}</li>)}
    //         </ul> 
    
    
    // doHandleIncrement = () => {
    //     this.handleIncrement({id:1})
    // }

    getBadgeClasses() {
        const {value: count, imageUrl} = this.props.item;
        let  classes = 'badge m-2 ';
        classes += count === 0 ? 'badge-warning' : 'badge-primary'
        return classes
    } 

    formatCount() {
        const {value: count, imageUrl} = this.props.item;
    return count === 0 ? 'Zero' : count;
    }
};