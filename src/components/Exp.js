import React from 'react'
import ExpPicker from './ExpPicker';
import studentExpData from "../data/CharacterLevelExcelTable.json";
import equipmentExpData from "../data/EquipmentLevelExcelTable.json";

class Exp extends React.Component {
  constructor() {
    super()
    this.state = {};
    this.expData = this.expData.bind(this);
  }
  expData(data) {
    if (this.validation(data)[0]) this.setState({ results: this.calculate(data) });
    this.setState({ ...data, valid: this.validation(data) });
  }

  //validation function
  validation({ currentLvl, currentExp, goalLvl, expType }) {
    currentLvl = parseInt(currentLvl | 0)
    currentExp = parseInt(currentExp | 0)
    goalLvl = parseInt(goalLvl | 0)
    //General Validations
    //error number
    if (currentLvl < 0) return [false, "Level cannot be below zero"]
    //goal>current
    if (goalLvl <= currentLvl) return [false, "Goal level must be higher level than current level"]

    //Student Specific Validations
    if (expType === "Report") {
      //maxlv 70
      if (currentLvl > 70 || goalLvl > 70) return [false, "Max Student level is 70"]
      //current exp overflow
      if (currentExp >= studentExpData.DataList[currentLvl].Exp) return [false, "Current EXP is higher than current level's total exp"]
    }

    //Equipment Specific Validations
    if (expType === "Equipment") {
      //maxlv 45
      if (currentLvl > 45 || goalLvl > 45) return [false, "Max Equipment level is 45"]
      //current exp overflow
      if (currentExp >= equipmentExpData.DataList[currentLvl].Exp) return [false, "Current EXP is higher than current level's total exp"]
    }
    return [true, '']
  }

  //calculation function
  calculate(data) {
    const { currentLvl, currentExp, goalLvl, expType, exp1, exp2, exp3, exp4 } = data
    let exp, xpTable, credPerXp
    if (expType === "Report") {
      exp = studentExpData.DataList
      xpTable = [50, 500, 2000, 10000]
      credPerXp = 7
    }
    if (expType === "Equipment") {
      exp = equipmentExpData.DataList
      xpTable = [90, 360, 1440, 5760]
      credPerXp = 4
    }
    const startingExp = exp[currentLvl - 1]['TotalExp'] + parseInt(currentExp | 0)
    const goalExp = exp[goalLvl - 1]['TotalExp']
    const requiredExp = goalExp - startingExp
    let creditCost = 0
    let xpCheck = [exp1, exp2, exp3, exp4]
    let qty = [0, 0, 0, 0]
    let remainderxp = requiredExp
    let trueCount = 0
    for (let i = 3; i >= 0; i--) {
      if (xpCheck[i] === true) ++trueCount
    }
    for (let i = 3; i >= 0; i--) {
      if (xpCheck[i] === true) {
        --trueCount
        if (trueCount === 0) {
          qty[i] = Math.ceil(remainderxp / xpTable[i])
          if (expType === "Equipment" || goalLvl === 70) creditCost += Math.ceil(remainderxp * credPerXp)
          if (expType === "Report" && goalLvl < 70) creditCost += Math.ceil((qty[i] * xpTable[i]) * credPerXp)
        }
        else {
          if (requiredExp / xpTable[i] >= 1) {
            qty[i] = Math.floor(remainderxp / xpTable[i])
            remainderxp = remainderxp % xpTable[i]
            creditCost += Math.ceil((qty[i] * xpTable[i]) * credPerXp)
          }
        }
      }
    }
    return { qty, creditCost }
  }

  render() {
    return (
      <div>
        <div>
          {/* <MapPicker selectedMap={this.selectMap}/> */}
          <ExpPicker expData={this.expData} />
        </div>
        <div className="has-text-centered mt-4">
          {/* Result Component */}
          {this.state.currentLvl > 0 && this.state.currentExp >= 0 && this.state.goalLvl > 0 ? (
            //calc
            <div>
              {this.state.valid[0] ? (
                <div>
                  <p className='has-text-weight-semibold is-size-5'>Materials Required</p>
                  <p>{this.state.results.qty[0]} White</p>
                  <p>{this.state.results.qty[1]} Blue</p>
                  <p>{this.state.results.qty[2]} Yellow</p>
                  <p>{this.state.results.qty[3]} Purple</p>
                  <p>{this.state.results.creditCost} Credits</p>
                </div>
              ) : (
                <div>
                  <p>Please verify the input fields!</p>
                  <p>Error: {this.state.valid[1]}</p>
                </div>
              )
              }
            </div>
          ) : (
            <div>
              <p className='has-text-weight-semibold is-size-5'>Breakdown of materials</p>
              {this.state.expType === "Report" ? (
                <div>
                  <p>White     50 exp</p>
                  <p>Blue      500 exp</p>
                  <p>Orange    2000 exp</p>
                  <p>Purple    10000 exp</p>
                  <p>Costs 7 credits / exp</p>
                </div>
              ) : (
                <div>
                  <p>White     90 exp</p>
                  <p>Blue      360 exp</p>
                  <p> Orange    1440 exp</p>
                  <p>Purple    5760 exp</p>
                  <p> Costs 4 credits / exp</p>
                </div>
              )
              }
            </div>
          )
          }
        </div>
      </div>
    )
  }
}

export default Exp