import React from "react";

const PeriodSelect = ({ period, handlePeriod }) => {
  return (
    <div>
      <label htmlFor="period-select">
        <select
          onChange={handlePeriod}
          name="period"
          value={period}
          id="period-select"
        >
          <option value="">Choose a period</option>
          <option value="-50000 -3000">Prehistory</option>
          <option value="-3000 476">Antiquity</option>
          <option value="476 1492">Middle Age</option>
          <option value="1492 1789">Modern Times</option>
          <option value="1789 1914">Industrial Revolution</option>
          <option value="1914 2020">
            The 20th century and the world today
          </option>
        </select>
      </label>
    </div>
  );
};

export default PeriodSelect;
