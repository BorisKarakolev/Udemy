import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    // This is the only time we do direct assignment to this.state.
    this.state = { latitude: null, longitude: null, error: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // To update state object we called setState, which is func. called automatically with React.Component.
        this.setState({ latitude: position.coords.latitude });
        this.setState({ longitude: position.coords.longitude });
      },
      (err) => {
        this.setState({ error: err.message });
      }
    );
  }

  // React says we have to define render!!
  render() {
    if (this.state.error && !this.state.latitude && !this.state.longitude) {
      return <div>Error: {this.state.error}</div>;
    }

    if (!this.state.error && this.state.latitude && this.state.longitude) {
      return (
        <div>
          <div>Latitude: {this.state.latitude}</div>
          <div>Longitude: {this.state.longitude}</div>
        </div>
      );
    }
    return <h1>Loading...</h1>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
