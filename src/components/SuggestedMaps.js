import React from "react";
import mapData from "../data/equipdrop.json";

function scoreCompare(a,b){
    //custom desc score sort compare
    if (a.score<b.score){
        return 1;
    }
    else if (a.score>b.score){
        return -1;
    }
    return 0;
}

function evaluateMaps(maps,equips){
    if (!equips){
        console.log('lul empty array')
        return [];
    }
    const recommendedMaps = [];
    for (let map of maps){
        let score = 0
        //check if each array item matches
        score += equips.includes(map.reward[0])?1.2:0;
        score += equips.includes(map.reward[1])?1:0;
        score += equips.includes(map.reward[2])?1:0;
        //check if hard mode, if so x 1.5
        score *= map['map'].split('-')[2] === 'Hard' ? 1.5 : 1;
        map.score = score;
        if (score>0)recommendedMaps.push(map)
    }
    return(recommendedMaps.sort(scoreCompare))
}

const SuggestedMaps = ({equipsArray}) => {
  const recMaps = evaluateMaps(mapData,equipsArray)
  return (
    <div>
      <div className="mapHeader mt-5 has-text-centered">
        <h3>Recommended Maps</h3>
      </div>
      <div className="suggestedMaps has-text-centered container">
        <div className="columns is-multiline">
          {equipsArray.length === 0 ? (
            <div className="column is-12">
              <p className="has-text-weight-bold is-bold-light">Drop Rates</p>
              <p>40% / 30% / 30% (Tier 1)</p>
              <p>34.4% / 25.8% / 25.8% (Tier 2/3/4)</p>
              <p>2x Drop chance on hard mode</p>
              <p>Character Shards are always 40% chance</p>
            </div>
          ) : null}
          {recMaps.map((map)=>(
          <div className="column is-12 columns is-vcentered is-centered is-multiline" key={map.map}>
              <div className="column is-narrow">
                <p className="has-text-weight-bold is-bold-light">{map.map}</p>
              </div>
              <div className="column is-narrow">
                <img src={`../../img/Equipment_Icon_${map.reward[0]}.webp`} alt={map.reward[0]} title={map.reward[0]} width="100"/>
                <img src={`../../img/Equipment_Icon_${map.reward[1]}.webp`} alt={map.reward[1]} title={map.reward[1]} width="100"/>
                <img src={`../../img/Equipment_Icon_${map.reward[2]}.webp`} alt={map.reward[2]} title={map.reward[2]} width="100"/>
            </div>
                <hr/>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SuggestedMaps;
