import { Component } from "react";
import './App.css';

class App extends  Component {
  constructor() {
    super();

    this.state = {
      movies: [
        {id: 1, name: "Fast 1", "year":2021},
        {id: 2, name: "Fast 2", "year":2022},
        {id: 3, name: "Fast 3", "year":2023},
      ]
    };
  }

  changeName = (e) => {
    this.setState({
      movies: [
        {id: 1, name: e.target.value, "year":2021},
        {id: 2, name: "Fast 2", "year":2022},
        {id: 3, name: "Fast 3", "year":2023},
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Learn About React js</h1>
        {
          this.state.movies.map((movie) => {
            return <h2 key={movie.id}>My Favofite movie is {movie.name}</h2>
          })
        }
        <button onClick={() => { this.changeName()
        }}>fast 11</button>
        <input type="text" onChange={this.changeName} />
      </div>
    );
  }
}

export default App;
