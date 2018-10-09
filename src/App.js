import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import { ENDPOINTS, REQUEST_PARAMS } from "./constants";

import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./MovieList";

axios.defaults.params = REQUEST_PARAMS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: null,
      movies: null,
      config: null,
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get(ENDPOINTS.config).then(({ data }) => {
      this.setState({ config: data.images });
    });
    axios.get(ENDPOINTS.nowPlaying).then(({ data }) => {
      this.setState({ movies: data.results }, () => {});
    });
    axios.get(ENDPOINTS.movieGenres).then(({ data }) => {
      this.setState({ genres: data.genres });
    });
  }

  render() {
    if (!this.state.config || !this.state.movies || !this.state.genres) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-xs-3">
            <Sidebar genres={this.state.genres} />
          </div>
          <div className="col-xs-9">
            <MovieList movies={this.state.movies} config={this.state.config} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
