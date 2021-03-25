import React, { useState, useEffect } from "react";
import { useEquip } from "./useEquip";

const EquipPicker = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedEquips, setSelectedEquip] = useEquip([]);

  useEffect(()=>{
    props.selectedEquips(selectedEquips);
  },[selectedEquips])
  return (
    <div>
      <div className="tierTab tabs is-centered">
        <ul>
          <li
            className={`${activeTab === 1 ? "is-active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            <a onClick={activeTab === 1 ? null : setSelectedEquip}>Tier 1</a>
          </li>
          <li
            className={`${activeTab === 2 ? "is-active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            <a onClick={activeTab === 2 ? null : setSelectedEquip}>Tier 2</a>
          </li>
          <li
            className={`${activeTab === 3 ? "is-active" : ""}`}
            onClick={() => setActiveTab(3)}
          >
            <a onClick={activeTab === 3 ? null : setSelectedEquip}>Tier 3</a>
          </li>
          <li
            className={`${activeTab === 4 ? "is-active" : ""}`}
            onClick={() => setActiveTab(4)}
          >
            <a onClick={activeTab === 4 ? null : setSelectedEquip}>Tier 4</a>
          </li>
          <li
            className={`${activeTab === 5 ? "is-active" : ""}`}
            onClick={() => setActiveTab(5)}
          >
            <a onClick={activeTab === 5 ? null : setSelectedEquip}>Tier 5</a>
          </li>
        </ul>
      </div>
      <div className="equipSelect columns is-multiline">
        {activeTab === 1 ? (
          <div className="column is-full">
            <div className="equipSet">
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Badge_Tier1.webp"
                  alt="Badge1"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Badge_Tier1"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Bag_Tier1.webp"
                  alt="Bag1"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Bag_Tier1"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Charm_Tier1.webp"
                  alt="Charm1"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Charm_Tier1"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Gloves_Tier1.webp"
                  alt="Gloves1"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Gloves_Tier1"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Hairpin_Tier1.webp"
                  alt="Hairpin1"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Hairpin_Tier1"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Hat_Tier1.webp"
                  alt="Hat1"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Hat_Tier1"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Necklace_Tier1.webp"
                  alt="Necklace1"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Necklace_Tier1"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Shoes_Tier1.webp"
                  alt="Shoes1"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Shoes_Tier1"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Watch_Tier1.webp"
                  alt="Watch1"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Watch_Tier1"
                  onChange={setSelectedEquip}
                />
              </label>
            </div>
          </div>
        ) : null}
        {activeTab === 2 ? (
          <div className="column is-full">
            <div className="equipSet">
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Badge_Tier2.webp"
                  alt="Badge2"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Badge_Tier2"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Bag_Tier2.webp"
                  alt="Bag2"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Bag_Tier2"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Charm_Tier2.webp"
                  alt="Charm2"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Charm_Tier2"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Gloves_Tier2.webp"
                  alt="Gloves2"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Gloves_Tier2"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Hairpin_Tier2.webp"
                  alt="Hairpin2"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Hairpin_Tier2"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Hat_Tier2.webp"
                  alt="Hat2"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Hat_Tier2"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Necklace_Tier2.webp"
                  alt="Necklace2"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Necklace_Tier2"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Shoes_Tier2.webp"
                  alt="Shoes2"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Shoes_Tier2"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Watch_Tier2.webp"
                  alt="Watch2"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Watch_Tier2"
                  onChange={setSelectedEquip}
                />
              </label>
            </div>
          </div>
        ) : null}
        {activeTab === 3 ? (
          <div className="column is-full">
            <div className="equipSet">
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Badge_Tier3.webp"
                  alt="Badge3"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Badge_Tier3"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Bag_Tier3.webp"
                  alt="Bag3"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Bag_Tier3"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Charm_Tier3.webp"
                  alt="Charm3"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Charm_Tier3"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Gloves_Tier3.webp"
                  alt="Gloves3"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Gloves_Tier3"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Hairpin_Tier3.webp"
                  alt="Hairpin3"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Hairpin_Tier3"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Hat_Tier3.webp"
                  alt="Hat3"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Hat_Tier3"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Necklace_Tier3.webp"
                  alt="Necklace3"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Necklace_Tier3"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Shoes_Tier3.webp"
                  alt="Shoes3"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Shoes_Tier3"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Watch_Tier3.webp"
                  alt="Watch3"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Watch_Tier3"
                  onChange={setSelectedEquip}
                />
              </label>
            </div>
          </div>
        ) : null}
        {activeTab === 4 ? (
          <div className="column is-full">
            <div className="equipSet">
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Badge_Tier4.webp"
                  alt="Badge4"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Badge_Tier4"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Bag_Tier4.webp"
                  alt="Bag4"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Bag_Tier4"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Charm_Tier4.webp"
                  alt="Charm4"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Charm_Tier4"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Gloves_Tier4.webp"
                  alt="Gloves4"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Gloves_Tier4"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Hairpin_Tier4.webp"
                  alt="Hairpin4"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Hairpin_Tier4"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Hat_Tier4.webp"
                  alt="Hat4"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Hat_Tier4"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Necklace_Tier4.webp"
                  alt="Necklace4"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Necklace_Tier4"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Shoes_Tier4.webp"
                  alt="Shoes4"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Shoes_Tier4"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Watch_Tier4.webp"
                  alt="Watch4"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Watch_Tier4"
                  onChange={setSelectedEquip}
                />
              </label>
            </div>
          </div>
        ) : null}
        {activeTab === 5 ? (
          <div className="column is-full">
            <div className="equipSet">
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Badge_Tier5.webp"
                  alt="Badge5"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Badge_Tier5"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Bag_Tier5.webp"
                  alt="Bag5"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Bag_Tier5"
                  onChange={setSelectedEquip}
                />
              </label>
              {/* <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Charm_Tier5.webp"
                  alt="Charm5"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Charm_Tier5"
                  onChange={setSelectedEquip}
                />
              </label> */}
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Gloves_Tier5.webp"
                  alt="Gloves5"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Gloves_Tier5"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Hairpin_Tier5.webp"
                  alt="Hairpin5"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Hairpin_Tier5"
                  onChange={setSelectedEquip}
                />
              </label>
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Hat_Tier5.webp"
                  alt="Hat5"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Hat_Tier5"
                  onChange={setSelectedEquip}
                />
              </label>
              {/* <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Necklace_Tier5.webp"
                  alt="Necklace5"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Necklace_Tier5"
                  onChange={setSelectedEquip}
                />
              </label> */}
              <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Shoes_Tier5.webp"
                  alt="Shoes5"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Shoes_Tier5"
                  onChange={setSelectedEquip}
                />
              </label>
              {/* <label className="checkbox">
                <img
                  width="125px"
                  src="../../img/Equipment_Icon_Watch_Tier5.webp"
                  alt="Watch5"
                />
                <input
                  style={{ position: "absolute", right: "1px" }}
                  type="checkbox"
                  value="Watch_Tier5"
                  onChange={setSelectedEquip}
                />
              </label> */}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EquipPicker;