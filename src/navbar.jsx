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
  loading1,
}) => {
  return (
    <nav>
      <div className="logo-nav">
        <img src="./LogoBlanc2.png" alt="Logo du site" />
      </div>
      <div className="navbar-loading">
        {loading1 && <BodyLoading color={"white"} size={"small"} />}
      </div>
      <div>
        <DepartementSelect
          departement={departement}
          handleDepartement={handleDepartement}
        />
        <PeriodSelect period={period} handlePeriod={handlePeriod} />
        <button onClick={handleRandom}>Random Art !</button>
      </div>
    </nav>
  );
};
