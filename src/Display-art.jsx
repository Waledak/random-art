import React from "react";
import "./DisplayArt.css";
export default class DisplayArt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // img: props.primaryImageSmall,
      ObjectTitle: props.title,
      period: props.period,
      artistName: props.artistDisplayName,
      dimensions: props.dimensions,
      nationality: props.artistNationality,
      birthYear: props.artistBeginDate,
      deathYear: props.artistEndDate,
    };
  }
  render() {
    return (
      <div className="container-art">
        <div className="container-img">
          <img src={this.props.img} alt="" />
        </div>
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th colSpan="2">About the work of art</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>title:</td>
                <td>{this.state.ObjectTitle}</td>
              </tr>
              <tr>
                <td>Period:</td>
                <td>{this.state.period}</td>
              </tr>
              <tr>
                <td>Size: </td>
                <td>{this.state.dimensions}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">About the artist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td> {this.state.artistName}</td>
              </tr>
              <tr>
                <td>Nationality:</td>
                <td>{this.state.nationality}</td>
              </tr>
              <tr>
                <td>Date (Birth-Death): </td>
                <td>
                  {this.state.birthYear} - {this.state.deathYear}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
