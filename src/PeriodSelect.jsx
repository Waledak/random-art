import React from "react";

const PeriodSelect = ({ period, handlePeriod }) => {
  return (
    <div>
      <label  htmlFor="period-select">
        <select 
          onChange={handlePeriod}
          name="period"
          value={period}
          id="period-select"
        >
          <option value="">choose a period</option>
          <option value="-50000 -3000">La Préhistoire</option>
          <option value="-3000 476">L'Antiquité</option>
          <option value="476 1492">Le Moyen-Age</option>
          <option value="1492 1789">Les Temps Modernes</option>
          <option value="1789 1914">La Révolution Industrielle</option>
          <option value="1914 2020">Le XXe siècle et le monde actuèl</option>
        </select>
      </label>
    </div>
  );
};

export default PeriodSelect;
