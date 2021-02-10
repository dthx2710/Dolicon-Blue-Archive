import React from 'react'
import EquipPicker from './EquipPicker';
import SuggestedMaps from './SuggestedMaps';

class Equip extends React.Component {
  constructor() {
    super()
    this.state = {equips:[]};
    this.selectEquip=this.selectEquip.bind(this);
  }
  selectEquip(equips){
    this.setState({equips:equips});
  }

  render() {
    return (
      <div>
        <div>
          <EquipPicker selectedEquips={this.selectEquip}/>
        </div>
        <hr/>
        <div className="results">
          <SuggestedMaps equipsArray={this.state.equips}/>
        </div>
      </div>
    )
  }
}

export default Equip