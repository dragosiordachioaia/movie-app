import React, { Component } from "react";
import "./App.scss";

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
    this.onGenreCheck = this.onGenreCheck.bind(this);
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

  onGenreCheck(data) {
    console.log("onGenreCheck() data = ", data);

    let newGenres = JSON.parse(JSON.stringify(this.state.genres));
    newGenres.forEach(genreData => {
      if (genreData.id === data.id) {
        console.log("found:", genreData);
        genreData.checked = !genreData.checked;
      }
    });
    this.setState({ genres: newGenres });
  }

  render() {
    if (!this.state.config || !this.state.movies || !this.state.genres) {
      return <p>Loading...</p>;
    }

    return (
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar
            genres={this.state.genres}
            onGenreCheck={this.onGenreCheck}
          />
          <MovieList
            movies={this.state.movies}
            config={this.state.config}
            genres={this.state.genres}
          />
        </div>
      </div>
    );
  }
}

export default App;
