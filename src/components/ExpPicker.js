import React, { useState, useEffect } from "react";

const ExpPicker = (props) => {
  const [expType, setExpType] = useState("Report");
  const [levelInputs, setLevelInputs] = useState({currentLvl:"",currentExp:"",goalLvl:"",exp1:true,exp2:true,exp3:true,exp4:true})
    useEffect(()=>{
      props.expData({...levelInputs, expType:expType});
    },[levelInputs,expType])
  return (
    <div>
      <div className="expTab tabs is-centered">
        <ul>
          <li
            className={`${expType === "Report" ? "is-active" : ""}`}
            onClick={() => { setExpType("Report"); setLevelInputs({currentLvl:"",currentExp:"",goalLvl:"",exp1:true,exp2:true,exp3:true,exp4:true})}}
          >
            <a>Student</a>
          </li>
          <li
            className={`${expType === "Equipment" ? "is-active" : ""}`}
            onClick={() => { setExpType("Equipment"); setLevelInputs({currentLvl:"",currentExp:"",goalLvl:"",exp1:true,exp2:true,exp3:true,exp4:true})}}
          >
            <a>Equipment</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input className="input row expInput" type="number" min="1" placeholder="Current Level" value={levelInputs.currentLvl} onChange={(ev)=>setLevelInputs({...levelInputs,currentLvl:(ev.target.value)})}/>
              </p>
            </div>
            <div className="field">
              <input className="input row expInput" type="number" min="0" placeholder="Current EXP"  value={levelInputs.currentExp} onChange={(ev)=>setLevelInputs({...levelInputs,currentExp:(ev.target.value)})}/>
            </div>
            <div className="field">
              <p className="control is-expanded">
                <input className="input row expInput" type="number" min="1" placeholder="Goal Level"  value={levelInputs.goalLvl} onChange={(ev)=>setLevelInputs({...levelInputs,goalLvl:(ev.target.value)})}/>
              </p>
            </div>
          </div>
        </div>
        <div className="has-text-centered">
          <p className="has-text-weight-semibold is-size-4">
            Include
          </p>
          <label className="checkbox">
            <img
              width="152px"
              src={`../../img/${expType}_Icon_Exp_1.webp`}
              alt="Exp1"
            />
            <input
              style={{ position: "absolute", right: "1px" }}
              type="checkbox"
              value="Exp1"
              checked={levelInputs.exp1}
              onChange={()=>setLevelInputs({...levelInputs,exp1:!levelInputs.exp1})}
            />
          </label><label className="checkbox">
            <img
              width="152px"
              src={`../../img/${expType}_Icon_Exp_2.webp`}
              alt="Exp2"
            />
            <input
              style={{ position: "absolute", right: "1px" }}
              type="checkbox"
              value="Exp2"
              checked={levelInputs.exp2}
              onChange={()=>setLevelInputs({...levelInputs,exp2:!levelInputs.exp2})}
            />
          </label><label className="checkbox">
            <img
              width="152px"
              src={`../../img/${expType}_Icon_Exp_3.webp`}
              alt="Exp3"
            />
            <input
              style={{ position: "absolute", right: "1px" }}
              type="checkbox"
              value="Exp3"
              checked={levelInputs.exp3}
              onChange={()=>setLevelInputs({...levelInputs,exp3:!levelInputs.exp3})}
            />
          </label><label className="checkbox">
            <img
              width="152px"
              src={`../../img/${expType}_Icon_Exp_4.webp`}
              alt="Exp4"
            />
            <input
              style={{ position: "absolute", right: "1px" }}
              type="checkbox"
              value="Exp4"
              checked={levelInputs.exp4}
              onChange={()=>setLevelInputs({...levelInputs,exp4:!levelInputs.exp4})}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ExpPicker;
