import React, { Component } from "react";
import { connect } from "react-redux";
import { createJoke, deleteJoke } from "../actions";

class JokeList extends Component {
  componentWillMount() {
    fetch("http://127.0.0.1:5000/joke")
      .then(response => {
        return response.json();
      })
      .then(data => {
        for (let joke of data) {
          console.log(joke);
          this.props.createJoke(joke);
        }
      });
  }

  componentDidMount() {
    console.log("3");
  }

  onDeleteJoke(jokeId) {
    fetch("http://127.0.0.1:5000/joke", {
      method: "DELETE",
      body: JSON.stringify({ _id: jokeId })
    }).then(() => {
      this.props.deleteJoke(jokeId);
    });
  }

  render() {
    console.log("2");
    return (
      <div>
        <h2>All Jokes:</h2>
        <hr />
        <ul>
          {this.props.jokes.map(joke => {
            return (
              <li key={joke._id}>
                <h3>Joke Title: {joke.jokeTitle}</h3>
                {joke.jokeString}
                <button
                  onClick={() => this.onDeleteJoke(joke._id)}
                  type="submit"
                  className="btn btn-primary"
                >
                  Delete
                </button>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { jokes: state.jokes };
};

export default connect(
  mapStateToProps,
  { createJoke, deleteJoke }
)(JokeList);
