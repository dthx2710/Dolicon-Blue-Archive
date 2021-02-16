import React, { useState, useEffect } from "react";

const GachaButton = (props) => {
  const { students, rolls, banner, rateup } = props;
  const pool = { 1: [], 2: [], 3: [] };
  students.map(({ node: student }) => {
    switch (student.frontmatter.rarity) {
      case "1":
        pool["1"].push(student);
        break;
      case "2":
        pool["2"].push(student);
        break;
      case "3":
        pool["3"].push(student);
        break;
      default:
        break;
    }
  });

  return (
    <div className="gachaBtn">
      <button
        className="button"
        onClick={() => props.gachaAlgo(rolls, banner, rateup, pool)}
      >
        {rolls} Roll
      </button>
    </div>
  );
};

export default GachaButton;
