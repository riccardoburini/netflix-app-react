import { Component } from "react";
import CardMovie from "./CardMovie";

class FirstSaga extends Component {
  state = {
    cover: [],
  };
  componentDidMount = async () => {
    try {
      const response = await fetch("https://www.omdbapi.com/?apikey=ea366128&s=rocky&plot=full");
      if (response.ok) {
        const data = await response.json();
        this.setState({ cover: data.Search });
        console.log(this.state.cover);
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return this.state.cover.map((mov) => <CardMovie movie={mov} />);
  }
}

export default FirstSaga;
