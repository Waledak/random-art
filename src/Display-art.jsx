import React from "react";
import BodyLoading from "./BodyLoading";
import "./DisplayArt.css";

const DisplayArt = ({ objectToDisplay, loading2 }) => {
  return (
    <article className="container-art">
      <div className="container-img">
        {loading2 ? (
          <BodyLoading color={"#e4002b"} size={"large"} />
        ) : (
          <img src={objectToDisplay.primaryImageSmall} alt="" />
        )}
      </div>
      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th colSpan="2">Object Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title:</td>
              <td>
                {objectToDisplay.title === ""
                  ? "Unknown data"
                  : objectToDisplay.title}
              </td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>
                {objectToDisplay.objectDate === ""
                  ? "Unknown data"
                  : objectToDisplay.objectDate}
              </td>
            </tr>
            <tr>
              <td>Culture: </td>
              <td>
                {objectToDisplay.culture === ""
                  ? "Unknown data"
                  : objectToDisplay.culture}
              </td>
            </tr>
            <tr>
              <td>Size: </td>
              <td>
                {objectToDisplay.dimensions === ""
                  ? "Unknown data"
                  : objectToDisplay.dimensions}
              </td>
            </tr>
            <tr>
              <td>Classification: </td>
              <td>
                {objectToDisplay.classification === ""
                  ? "Unknown data"
                  : objectToDisplay.classification}
              </td>
            </tr>
            <tr>
              <td>Period: </td>
              <td>
                {objectToDisplay.period === ""
                  ? "Unknown data"
                  : objectToDisplay.period}
              </td>
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
              <td>
                {" "}
                {objectToDisplay.artistDisplayName === ""
                  ? "Unknown data"
                  : objectToDisplay.artistDisplayName}
              </td>
            </tr>
            <tr>
              <td>Nationality:</td>
              <td>
                {objectToDisplay.artistNationality === ""
                  ? "Unknown data"
                  : objectToDisplay.artistNationality}
              </td>
            </tr>
            <tr>
              <td>Date (Birth-Death): </td>
              <td>
                {objectToDisplay.artistBeginDate !== "" &&
                objectToDisplay.artistEndDate !== ""
                  ? objectToDisplay.artistBeginDate +
                    " - " +
                    objectToDisplay.artistEndDate
                  : objectToDisplay.artistBeginDate !== ""
                  ? objectToDisplay.artistBeginDate
                  : objectToDisplay.artistEndDate !== ""
                  ? objectToDisplay.artistEndDate
                  : "Unknown data"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default DisplayArt;
