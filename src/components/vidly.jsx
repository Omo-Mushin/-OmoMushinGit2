import React, { Component } from 'react';
import ListGroup from './common/ListGroup';
import { getMovies } from '../fakeMovieService'; 
// import { Route, } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import _ from 'lodash';
import Pagination from './common/pagination1';
import { paginate } from '../utilities/paginate1';
import { getGenres } from './common/fakeGenreService';
import MoviesTable from './VidlyTable';
import { NavLink } from 'react-router-dom';

export default class Vidly extends Component {
    state = {
       movies: [], pageSize: 4, genres:[],
       currentPage: 1, sortColumn : {path: 'title', order: 'asc'}
    }
    componentDidMount() {
        const genres = [{'_id': '','name': 'All Movies'}, ...getGenres()]
        this.setState({movies: getMovies(), genres:genres})
    }

    handleDelete = movie => {
        console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies: movies})
    }
    handleLike =  movie => {
        console.log('Liked')
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = {...movie }
        movies[index].liked = !movies[index].liked
        this.setState({movies})
    }
    handleChangePage =  page => {
        this.setState({currentPage: page})
        // console.log(this.state.currentPage)
    }
     
    handleChangeGenre = genre => {
        this.setState({ selectedGenre : genre , currentPage: 1})
        // console.log(genre)
    }
    handleSort = path => {
         this.setState({sortColumn : {path:path, order: 'asc'}})
        // console.log(path)
    }
    handleSortDesc = path => {
    this.setState({sortColumn: {path, order: 'desc'}})
        console.log(path)
    }

    render() {
        const filtered = this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(m => m.genre._id === this.state.selectedGenre._id) 
        : this.state.movies
        const sorted = _.orderBy(filtered, [this.state.sortColumn.path], 
            [this.state.sortColumn.order])
        const movies = paginate(sorted, this.state.currentPage, this.state.pageSize)
        return (<body>
            <div className='row'>
                <div className='col-2'>
                        <ListGroup onSwitchGenre = {this.handleChangeGenre}
                            genresItems={this.state.genres} textProperty = 'name' valueProperty='_id'
                            selectedItem={this.state.selectedGenre} />
                
                </div>
                
                    <div className='col'>
                    <NavLink className="nav-link" 
                    to="/newMovie">
                        <button className="btn btn-primary" onClick={this.handleAddMovie}>
                        New Movie
                        </button>
                   </NavLink>
                 
                    { filtered.length === 0 && <p className='p-4'>
                        'There are no movies in the database'</p>}
                { filtered.length > 0 && 
                <p>There are { filtered.length } movies in the database</p>}
                { filtered.length > 0 && 
                    <MoviesTable movies={movies} onLike={this.handleLike}
                    onSort={this.handleSort} onDelete={this.handleDelete}
                    onSortDesc={this.handleSortDesc} />
                }
                
                <Pagination itemCount={filtered.length}
                 pageSize={this.state.pageSize} changePage={this.handleChangePage}
                 currentPage={this.state.currentPage}/>  
                    </div>
                        
            </div>
            </body>
        )
    }
                    
}

{/* <Route path='' render={ (props) => <ListGroup onSwitchGenre = {this.handleChangeGenre}
                            genresItems={this.state.genres} textProperty = 'name'valueProperty='_id'
                            selectedItem={this.state.selectedGenre} {...this.props}
                         />     }/> */}

{/* <Route path='' render={(props) => <MoviesTable movies={movies} onLike={this.handleLike}
                    onSort={this.handleSort} onDelete={this.handleDelete}
                    onSortDesc={this.handleSortDesc} {...props}/>}/> */}