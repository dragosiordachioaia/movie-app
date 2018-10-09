import React, { Component } from "react";

import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.displayList = this.displayList.bind(this);
  }

  displayList() {
    return this.props.movies.map(movieData => {
      return (
        <div className="col-sm-3 col-xs-6" key={movieData.id}>
          <MovieItem data={movieData} config={this.props.config} />
        </div>
      );
    });
  }

  render() {
    console.log("movies are:", this.props.movies);
    return <div> {this.displayList()} </div>;
  }
}
