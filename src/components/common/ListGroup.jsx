import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getGenres } from './fakeGenreService';
class ListGroup extends Component {
    // state = { genresColumn: this.props.genresItems} 
    render() { 
        const genresColumn = this.props.genresItems
        return (
            <ul className="list-group">
                {/* <li className="list-group-item">All genres</li> */}
                {genresColumn.map(item => (
                    <li onClick={() => this.props.onSwitchGenre(item)}
                     key={item[this.props.valueproperty]} style={{cursor:'pointer'}}
                     className={item === this.props.selectedItem ? 'list-group-item active' : "list-group-item"}>
                        {item[this.props.textProperty]} </li>
                ) )}
                
                </ul> 
        );
    }
}
 
ListGroup.defaultProps = {
    textProperty : 'name', valueproperty : '_id'
}
export default ListGroup;