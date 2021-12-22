import React from 'react'
import EquipPicker from './EquipPicker';
import SuggestedMaps from './SuggestedMaps';
const ads = <script data-ad-client="ca-pub-8500505837042857" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> ;
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
        {ads}
      </div>
    )
  }
}

export default Equip