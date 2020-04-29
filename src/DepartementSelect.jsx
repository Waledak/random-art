import React from "react";

const DepartementSelect = ({ departement, handleDepartement }) => {
  return (
    <div>
      <label htmlFor="departement-select">
        <select
          onChange={handleDepartement}
          name="departement"
          value={departement}
          id="pet-select"
        >
          <option value="">choose a departement</option>
          <option value="American Decorative Arts">
            American Decorative Arts
          </option>
          <option value="Ancient Near Eastern Art">
            Ancient Near Eastern Art
          </option>
          <option value="Arms and Armor">Arms and Armor</option>
          <option value="Arts of Africa, Oceania, and the Americas">
            Arts of Africa, Oceania, and the Americas
          </option>
          <option value="Asian Art">Asian Art</option>
          <option value="The Costume Institute">The Costume Institute</option>
          <option value="Drawings and Prints">Drawings and Prints</option>
          <option value="Egyptian Art">Egyptian Art</option>
          <option value="European Paintings">European Paintings</option>
          <option value="European Sculpture and Decorative Arts">
            European Sculpture and Decorative Arts
          </option>
          <option value="Greek and Roman Art">Greek and Roman Art</option>
          <option value="Islamic Art">Islamic Art</option>
          <option value="The Robert Lehman Collection">
            The Robert Lehman Collection
          </option>
          <option value="The Libraries">The Libraries</option>
          <option value="Medieval Art">Medieval Art</option>
          <option value="Musical Instruments">Musical Instruments</option>
          <option value="Photographs">Photographs</option>
          <option value="Modern Art">Modern Art</option>
        </select>
      </label>
    </div>
  );
};

export default DepartementSelect;
