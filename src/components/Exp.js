import React from 'react'
import MapPicker from './MapPicker';

class Exp extends React.Component {
//   constructor() {
//     super()
//     this.state = {map:''};
//     this.selectMap=this.selectMap.bind(this);
//   }
//   selectMap(map){
//     this.setState({map:map});
//   }

  render() {
    return (
      <div>
        <div>
          {/* <MapPicker selectedMap={this.selectMap}/> */}
          {/* Exp picker component with input table component */}
        </div>
        <div className="has-text-centered mt-4">
            {/* Result Component */}
        </div>
      </div>
    )
  }
}

export default Exp