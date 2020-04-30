import React from "react";
import "./navbar.css";
import DepartementSelect from "./DepartementSelect";
import PeriodSelect from "./PeriodSelect";
import BodyLoading from "./BodyLoading";

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
      {loading1 && <BodyLoading color={"white"} size={"small"} />}
      <div>
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
