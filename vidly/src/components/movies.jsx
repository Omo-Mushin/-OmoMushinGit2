import React, { Component } from "react";

import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    /** Here whe create a new variable that has the All Genres object and
     * using the Spread operator, we copy all the data returned from the
     * getGenres method, from our fakeService, generating a new array
     * with the "static" genre All Genres at the beginning
     */
    const genres = [{ _id: "0", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre
    } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    /**  Here we're going to filter the allMovies array to get only the movies
     * with the selected genre. If there is a selected genre, we'll filter.
     * Otherwise, we'll return the allMovies array as it is, with no filters
     * */

    const filtered =
      selectedGenre && selectedGenre._id !== "0"
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    /** Here we call the paginate method from our pagination component passing
     * the filtered array, that now has all the movies we want to display on
     * the list
     */
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database. </p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
