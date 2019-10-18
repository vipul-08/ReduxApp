import React, { Component } from "react";
import { connect } from "react-redux";
import { createJoke, deleteJoke } from "../actions";

class JokeList extends Component {

  onDeleteJoke(jokeId) {
      this.props.deleteJoke(jokeId);
  }

  render() {
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
