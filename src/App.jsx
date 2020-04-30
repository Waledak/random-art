import React from "react";
import axios from "axios";
import "./App.css";
import DisplayArt from "./Display-art";
import Carrousel from "./Carrousel";
import { Navbar } from "./navbar";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departement: "",
      period: "",
      imageSelect: "",
      // oldObjectDisplay: {},
      objectToDisplay: {},
      departementAndPeriodIds: {},
      loading1: false,
      loading2: false,
    };
  }
  // componentDidUpdate() {
  //   if (this.state.oldObjectDisplay !== this.state.objectToDisplay) {
  //     this.setState({ oldObjectDisplay: this.state.objectToDisplay });
  //   }
  // }
  componentDidMount() {
    this.handleRandom();
  }
  handleDepartement = (e) => {
    this.setState({ departement: e.target.value, loading1: true });
    const splitDates = this.state.period.split(" ");
    const randomLetter = alphabet[Math.floor(Math.random() * 26)];
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true${
          this.state.period !== ""
            ? `&dateBegin=${splitDates[0]}&dateEnd=${splitDates[1]}`
            : ""
        }${
          e.target.value !== "" ? `&departmentId=${e.target.value}` : ""
        }&q=${randomLetter}`
      )
      .then((res) => res.data)
      .then((res) => {
        this.setState({ departementAndPeriodIds: res, loading1: false });
      });
  };

  handlePeriod = (e) => {
    this.setState({ period: e.target.value, loading1: true });
    const splitDates = e.target.value.split(" ");
    const randomLetter = alphabet[Math.floor(Math.random() * 26)];
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
        }&q=${randomLetter}`
      )
      .then((res) => res.data)
      .then((res) => {
        this.setState({ departementAndPeriodIds: res, loading1: false });
      });
  };

  handleRandom = () => {
    this.setState({ loading2: true });
    if (
      (this.state.departement === "" && this.state.period === "") ||
      !this.state.departementAndPeriodIds.objectIDs
    ) {
      const randomId = Math.floor(Math.random() * 300000);
      axios
        .get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomId}`
        )
        .then((res) => res.data)
        .then((res) => {
          if (res.primaryImageSmall === "") {
            this.handleRandom();
          } else {
            this.setState({ objectToDisplay: res, loading2: false });
          }
        })
        .catch(() => {
          this.handleRandom();
        });
    } else {
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
        <Carrousel />
        <footer></footer>
      </div>
    );
  }
}

export default App;
