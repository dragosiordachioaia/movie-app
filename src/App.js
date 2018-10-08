import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import { ENDPOINTS, REQUEST_PARAMS } from "./constants";

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
    this.getImagePath = this.getImagePath.bind(this);
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

  getImagePath(imageID) {
    if (!this.state.config) {
      return null;
    }

    return `${this.state.config.base_url}${
      this.state.config.poster_sizes[4]
    }${imageID}`;
  }

  render() {
    if (!this.state.config || !this.state.movies || !this.state.genres) {
      return <p>Loading...</p>;
    }
    let posterPath = this.state.movies[0].poster_path;
    let fullPosterPath = this.getImagePath(posterPath);

    return (
      <div className="App">
        <img src={fullPosterPath} />
      </div>
    );
  }
}

export default App;
