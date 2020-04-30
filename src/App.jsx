import React from "react";
import axios from "axios";
import "./App.css";
import DisplayArt from "./Display-art";
import Carrousel from "./Carrousel";
import { Navbar } from "./navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departement: "",
      period: "",
      imageSelect: "",
      objectToDisplay: {},
      departementAndPeriodIds: {},
      loading1: false,
      loading2: false,
    };
  }

  componentDidMount() {
    this.setState({ loading2: true });
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=b`
      )
      .then((res) => res.data)
      .then((res) => {
        this.setState({ departementAndPeriodIds: res, loading1: false });
      })
      .then(() => this.handleRandom());
  }
  handleDepartement = (e) => {
    this.setState({ departement: e.target.value, loading1: true });
    const splitDates = this.state.period.split(" ");
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true${
          this.state.period !== ""
            ? `&dateBegin=${splitDates[0]}&dateEnd=${splitDates[1]}`
            : ""
        }${e.target.value !== "" ? `&departmentId=${e.target.value}` : ""}&q=b`
      )
      .then((res) => res.data)
      .then((res) => {
        this.setState({ departementAndPeriodIds: res, loading1: false });
      });
  };

  handlePeriod = (e) => {
    this.setState({ period: e.target.value, loading1: true });
    const splitDates = e.target.value.split(" ");
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true${
          e.target.value !== ""
            ? `&dateBegin=${splitDates[0]}&dateEnd=${splitDates[1]}`
            : ""
        }${
          this.state.departement !== ""
            ? `&departmentId=${this.state.departement}`
            : ""
        }&q=b`
      )
      .then((res) => res.data)
      .then((res) => {
        this.setState({ departementAndPeriodIds: res, loading1: false });
      });
  };

  handleRandom = () => {
    if (this.state.departementAndPeriodIds.objectIDs) {
      this.setState({ loading2: true });
      const random = Math.floor(
        Math.random() * this.state.departementAndPeriodIds.total
      );
      const id = this.state.departementAndPeriodIds.objectIDs[random];
      axios
        .get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        )
        .then((res) => res.data)
        .then((res) => {
          this.setState({ objectToDisplay: res, loading2: false });
        });
    }
  };

  handleClick = (imageSelect) => {
    const id = this.state.imageSelect.objectIDs;
    this.setState({ imageSelect: imageSelect });
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
      )
      .then((res) => res.data)
      .then((res) => {
        this.setState({ objectToDisplay: res });
      });
  };

  render() {
    return (
      <div className="App">
        <header>
          <Navbar
            handleRandom={this.handleRandom}
            handlePeriod={this.handlePeriod}
            handleDepartement={this.handleDepartement}
            departementAndPeriodIds={this.state.departementAndPeriodIds.total}
            loading1={this.state.loading1}
            {...this.state}
          />
        </header>
        <DisplayArt
          objectToDisplay={this.state.objectToDisplay}
          loading2={this.state.loading2}
        />
        <Carrousel
          handleClick={this.handleClick}
          imageSelect={this.state.imageSelect}
        />
        <footer></footer>
      </div>
    );
  }
}

export default App;
