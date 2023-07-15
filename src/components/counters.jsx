import React, { Component } from 'react';
import Counter from './counter';
export default class Counters extends Component {
    

    render() {
        return (
            <div>
                <button onClick={this.props.onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
            <h1>Evans</h1>
             {this.props.items.map(item => (
    <Counter key={item.id} item={item} selected={true} 
    onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} 
    onRemove= {this.props.onRemove} />
    ))}     
            </div>
        )
    }
}

