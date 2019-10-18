import React, { Component } from "react";

import { connect } from "react-redux";
import { createJoke } from "../actions";

class JokeForm extends Component {
  onCreateJoke = () => {
    let id = this.props.jokes.length + 1;
    let jokeTitle = document.getElementById("joke-title").value;
    let jokeText = document.getElementById("joke-text").value;
    let timestamp = new Date().getUTCMilliseconds();
    let joke = {
      jokeTitle: jokeTitle,
      jokeString: jokeText,
      userName: "vipul-08",
      _id: timestamp
    };

    document.getElementById("joke-title").value = "";
    document.getElementById("joke-text").value = "";
    
    this.props.createJoke(joke);
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="joke-title">Joke Title</label>
          <input
            type="text"
            className="form-control"
            id="joke-title"
            placeholder="Enter title for joke ..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="joke-text">Joke</label>
          <textarea
            type="text"
            rows="6"
            className="form-control"
            id="joke-text"
            placeholder="Enter the joke ..."
          />
        </div>
        <button
          onClick={this.onCreateJoke}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { jokes: state.jokes };
};

export default connect(
  mapStateToProps,
  { createJoke }
)(JokeForm);