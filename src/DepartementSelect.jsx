import React from "react";

const DepartementSelect = ({ departement, handleDepartement }) => {
  return (
    <div>
      <label htmlFor="departement-select">Choose a departement:</label>
      <select
        onChange={handleDepartement}
        name="departement"
        value={departement}
        id="pet-select"
      >
        <option value="">--Please choose an departement--</option>
        <option value="1">American Decorative Arts</option>
        <option value="3">Ancient Near Eastern Art</option>
        <option value="4">Arms and Armor</option>
        <option value="5">Arts of Africa, Oceania, and the Americas</option>
        <option value="6">Asian Art</option>
        <option value="8">The Costume Institute</option>
        <option value="9">Drawings and Prints</option>
        <option value="10">Egyptian Art</option>
        <option value="11">European Paintings</option>
        <option value="12">European Sculpture and Decorative Arts</option>
        <option value="13">Greek and Roman Art</option>
        <option value="14">Islamic Art</option>
        <option value="15">The Robert Lehman Collection</option>
        <option value="16">The Libraries</option>
        <option value="17">Medieval Art</option>
        <option value="18">Musical Instruments</option>
        <option value="19">Photographs</option>
        <option value="21">Modern Art</option>
      </select>
    </div>
  );
};

export default DepartementSelect;
