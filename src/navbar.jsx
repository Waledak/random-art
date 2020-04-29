import React from "react";
import "./navbar.css";
import DepartementSelect from "./DepartementSelect";
import PeriodSelect from "./PeriodSelect";

export const Navbar = ({
  handleRandom,
  period,
  departement,
  handlePeriod,
  handleDepartement,
  departementAndPeriodIds,
  loading1,
}) => {
  return (
    <nav>
      <div>
        <img src="./LogoBlanc2.png" alt="Logo du site" />
      </div>
      <div>
        <div class={loading1 ? "lds-ring" : ""}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <DepartementSelect
          departement={departement}
          handleDepartement={handleDepartement}
        />
        <PeriodSelect period={period} handlePeriod={handlePeriod} />
        <button onClick={handleRandom}>
          Random Art nb: {departementAndPeriodIds.total}
        </button>
      </div>
    </nav>
  );
};
