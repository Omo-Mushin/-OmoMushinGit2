import React, { Component } from 'react';
import Like from './common/Like';
import { Link, NavLink } from 'react-router-dom';
class MoviesTable extends Component {
    // state = {  } 
    render() { 
        
        return (<table  className='table'>
            <thead>
                        <tr>
                            <th style={{cursor : 'pointer'}} >
                                Title <span> 
                                        <i className='fa fa-sort-asc' onClick={() => this.props.onSort('title')}></i>
                                <i className='fa fa-sort-desc' onClick={() => this.props.onSortDesc('title')} ></i>
                                </span>
                            </th>
                            <th style={{cursor : 'pointer'}}>
                                Genre <span> 
                                        <i className='fa fa-sort-asc' onClick={() => this.props.onSort('genre.name')}></i>
                                <i className='fa fa-sort-desc' onClick={() => this.props.onSortDesc('genre.name')} ></i>
                                </span>
                            </th>
                            <th style={{cursor : 'pointer'}} >
                               Stock <span> 
                                        <i className='fa fa-sort-asc' onClick={() => this.props.onSort('numberInStock')}></i>
                                <i className='fa fa-sort-desc' onClick={() => this.props.onSortDesc('nun=mberInStock')} ></i>
                                </span>
                            </th>
                            <th style={{cursor : 'pointer'}} >
                                Rate <span> 
                                        <i className='fa fa-sort-asc' onClick={() => this.props.onSort('dailyRentalRate')}></i>
                                <i className='fa fa-sort-desc' onClick={() => this.props.onSortDesc('dailyRentalRate')} ></i>
                                </span>
                            </th>
                            <th> 
                                Status
                            </th >
                           
                            <th> 
                                Remove Video
                            </th >
                        </tr>
                    </thead>
                    {/* `/movies/${movie._id}` */}
                    <tbody>
                       {this.props.movies.map(movie => (
                        <tr key={movie._id}>
                            <td className='movie-title'>
                              <NavLink 
                              to={`/movie/${movie._id}/${movie.title}/${movie.genre.name}
                              /${movie.numberInStock}/${movie.dailyRentalRate}`}
                              >{movie.title}</NavLink>  
                            </td>
                            <td>
                               {movie.genre.name} 
                            </td>
                            <td>
                             {movie.numberInStock}   
                            </td>
                            <td>
                             {movie.dailyRentalRate}   
                            </td>
                            <td>
                                <Like onClick={() => this.props.onLike(movie)} liked={movie.liked} />
                            </td>
                            <td onClick={ () => this.props.onDelete(movie)} 
                            className='btn btn-danger btn-sm m-3'>delete</td>
                        </tr> ))} 
                    </tbody>
        </table>);
    }
}
 
export default MoviesTable;