import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  state = { latitude: null, longitude: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => this.setState({ error: err.message })
    );
  }

  renderContent() {
    if (this.state.error && !this.state.latitude) {
      return <div>Error: {this.state.error}</div>;
    }

    if (!this.state.error && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <Loader message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
