import React from "react";
import JokeList from "./JokeList";
import JokeForm from "./JokeForm";

const App = () => {
  return (
    <div>
      <div style={{ padding: 50 }}>
        <JokeForm />
        <br />
        <JokeList />
      </div>
    </div>
  );
};

export default App;
