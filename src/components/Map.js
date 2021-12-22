import React from 'react'
import MapPicker from './MapPicker';

class Map extends React.Component {
  constructor() {
    super()
    this.state = {map:''};
    this.selectMap=this.selectMap.bind(this);
  }
  selectMap(map){
    this.setState({map:map});
  }

  render() {
    return (
      <div>
        <div>
          <MapPicker selectedMap={this.selectMap}/>
        </div>
        <div className="map-image has-text-centered mt-4">
        <img
                  width="840px"
                  src={`../../img/${this.state.map}.webp`}
                  alt={this.state.map}
                />
        </div>
        <p className="column is-12 is-size-6">
            Map images sourced from wikiru.jp - Area 3/4 hard images unavailable for now
        </p>
      </div>
    )
  }
}

export default Map