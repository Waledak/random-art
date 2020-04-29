import React from "react";
import "./DisplayArt.css";

const DisplayArt = ({ objectToDisplay }) => {
  return (
    <div className="container-art">
      <div className="container-img">
        <img src={objectToDisplay.primaryImageSmall} alt="" />
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
              <td>{objectToDisplay.title}</td>
            </tr>
            <tr>
              <td>Period:</td>
              <td>{objectToDisplay.period}</td>
            </tr>
            <tr>
              <td>Size: </td>
              <td>{objectToDisplay.dimensions}</td>
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
              <td> {objectToDisplay.artistDisplayName}</td>
            </tr>
            <tr>
              <td>Nationality:</td>
              <td>{objectToDisplay.artistNationality}</td>
            </tr>
            <tr>
              <td>Date (Birth-Death): </td>
              <td>
                {objectToDisplay.artistBeginDate} -{" "}
                {objectToDisplay.artistEndDate}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayArt;
