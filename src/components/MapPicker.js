import React, { useState, useEffect } from "react";

const MapPicker = (props) => {
  const [areaTab, setAreaTab] = useState(1);
  const [mapTab, setMapTab] = useState(1);
  const selectedMap = areaTab + '-' + mapTab
  useEffect(()=>{
    props.selectedMap(selectedMap);
  },selectedMap)
  return (
    <div>
      <div className="areaTab tabs is-centered">
        <ul>
          <li
            className={`${areaTab === 1 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(1);setMapTab(1)}}
          >
            <a>Area 1</a>
          </li>
          <li
            className={`${areaTab === 2 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(2);setMapTab(1)}}
          >
            <a>Area 2</a>
          </li>
          <li
            className={`${areaTab === 3 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(3);setMapTab(1)}}
          >
            <a>Area 3</a>
          </li>
          <li
            className={`${areaTab === 4 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(4);setMapTab(1)}}
          >
            <a>Area 4</a>
          </li>
          <li
            className={`${areaTab === 5 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(5);setMapTab(1)}}
          >
            <a>Area 5</a>
          </li>
          <li
            className={`${areaTab === 6 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(6);setMapTab(1)}}
          >
            <a>Area 6</a>
          </li>
          <li
            className={`${areaTab === 7 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(7);setMapTab(1)}}
          >
            <a>Area 7</a>
          </li>
          <li
            className={`${areaTab === 8 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(8);setMapTab(1)}}
          >
            <a>Area 8</a>
          </li>
          <li
            className={`${areaTab === 9 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(9);setMapTab(1)}}
          >
            <a>Area 9</a>
          </li>
          <li
            className={`${areaTab === 10 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(10);setMapTab(1)}}
          >
            <a>Area 10</a>
          </li>
          <li
            className={`${areaTab === 11 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(11);setMapTab(1)}}
          >
            <a>Area 11</a>
          </li>
          <li
            className={`${areaTab === 12 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(12);setMapTab(1)}}
          >
            <a>Area 12</a>
          </li>
          <li
            className={`${areaTab === 13 ? "is-active" : ""}`}
            onClick={() => {setAreaTab(13);setMapTab(1)}}
          >
            <a>Area 13</a>
          </li>
        </ul>
      </div>
      <div className="tabs is-centered">
        <ul>
          <li
            className={`${mapTab === 1 ? "is-active" : ""}`}
            onClick={() => setMapTab(1)}
          >
            <a>{areaTab}-1</a>
          </li>
          <li
            className={`${mapTab === 2 ? "is-active" : ""}`}
            onClick={() => setMapTab(2)}
          >
            <a>{areaTab}-2</a>
          </li>
          <li
            className={`${mapTab === 3 ? "is-active" : ""}`}
            onClick={() => setMapTab(3)}
          >
            <a>{areaTab}-3</a>
          </li>
          <li
            className={`${mapTab === 4 ? "is-active" : ""}`}
            onClick={() => setMapTab(4)}
          >
            <a>{areaTab}-4</a>
          </li>
          <li
            className={`${mapTab === 5 ? "is-active" : ""}`}
            onClick={() => setMapTab(5)}
          >
            <a>{areaTab}-5</a>
          </li>
          <li
            className={`${mapTab === 6 ? "is-active" : ""}`}
            onClick={() => setMapTab(6)}
          >
            <a>{areaTab}-1 Hard</a>
          </li>
          <li
            className={`${mapTab === 7 ? "is-active" : ""}`}
            onClick={() => setMapTab(7)}
          >
            <a>{areaTab}-2 Hard</a>
          </li>
          <li
            className={`${mapTab === 8 ? "is-active" : ""}`}
            onClick={() => setMapTab(8)}
          >
            <a>{areaTab}-3 Hard</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MapPicker;
