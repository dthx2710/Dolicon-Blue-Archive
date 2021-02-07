import React, { useState, useEffect } from 'react';
import { useFilter } from "./useFilter";

const Filter = (props) => {
    const [showFilters, setShowFilters] = useState(false);
    const [values, handleChange] = useFilter(null);

    useEffect(()=>{
        props.changeFilter(values);
    }, [values])

    return(
    <div>
        <div className="studentlist-header">
            {showFilters ?
          <div>
            <button className="button is-danger is-light" onClick={()=>setShowFilters(!showFilters)}>Hide Filters</button>
          </div> :
          <button className="button is-info is-light" onClick={()=>setShowFilters(!showFilters)}>Show Filters</button>
            }
            
        {false ? <button className="button is-primary is-light">Clear</button> : null}
        <p className="control has-icons-left">
        <input id="name" name="name" className="input" type="search" placeholder="Search Student" onChange={handleChange}/>
        <span className="icon is-left">
            <i className="fas fa-search"></i>
        </span>
        </p>
        </div>
        {showFilters ?
        <div className="studentlist-filters">
            <div className="select is-info filter-item">
                <select id="rarity" onChange={handleChange}>
                    <option value=''>Rarity</option>
                    <option value='3'>3*</option>
                    <option value='2'>2*</option>
                    <option value='1'>1*</option>
                </select>
            </div>

            <div className="select is-info filter-item">
                <select id="weaponType" onChange={handleChange}>
                    <option value=''>Weapon</option>
                    <option value='HG'>HG</option>
                    <option value='SMG'>SMG</option>
                    <option value='AR'>AR</option>
                    <option value='SR'>SR</option>
                    <option value='SG'>SG</option>
                    <option value='MG'>MG</option>
                    <option value='GL'>GL</option>
                    <option value='RG'>RG</option>
                    <option value='RF'>RF</option>
                    <option value='RL'>RL</option>
                    <option value='DualSMG'>DualSMG</option>
                    <option value='DualMG'>DualMG</option>
                    <option value='MountMG'>MountMG</option>
                </select>
            </div>

            <div className="select is-info filter-item">
                <select id="affiliation" onChange={handleChange}>
                    <option value=''>Affiliation</option>
                    <option value='Abydos'>Abydos</option>
                    <option value='Trinity'>Trinity</option>
                    <option value='Gehenna'>Gehenna</option>
                    <option value='Millennium'>Millennium</option>
                    <option value='Red Winter'>Red Winter</option>
                    <option value='Valkyrie'>Valkyrie</option>
                    <option value='Hyakkiyako'>Hyakkiyako</option>
                    <option value='Shanhaijing'>Shanhaijing</option>
                </select>
            </div>
            
            {props.hasPosition ?
            <div className="select is-info filter-item">
                <select id="position" onChange={handleChange}>
                    <option value=''>Position</option>
                    <option value='Front'>Front</option>
                    <option value='Middle'>Middle</option>
                    <option value='Back'>Back</option>
                </select>
            </div>:null}

            <div className="select is-info filter-item">
                <select id="role" onChange={handleChange}>
                    <option value=''>Role</option>
                    <option value='Attacker'>Attacker</option>
                    <option value='Supporter'>Supporter</option>
                    <option value='Tank'>Tank</option>
                    <option value='Healer'>Healer</option>
                </select>
            </div>

            <div className="select is-info filter-item">
                <select id="atkType" onChange={handleChange}>
                    <option value=''>ATK</option>
                    <option value='Penetration'>Penetration</option>
                    <option value='Explosion'>Explosion</option>
                    <option value='Mystic'>Mystic</option>
                </select>
            </div>

            <div className="select is-info filter-item">
                <select id="defType" onChange={handleChange}>
                    <option value=''>DEF</option>
                    <option value='Light Armour'>Light Armour</option>
                    <option value='Heavy Armour'>Heavy Armour</option>
                    <option value='Special Armour'>Special Armour</option>
                </select>
            </div>

            <div className="select is-info filter-item">
                <select id="combatEnvironment" onChange={handleChange}>
                    <option value=''>Combat Advantage</option>
                    <option value='outdoor'>Outdoor</option>
                    <option value='urban'>Urban</option>
                    <option value='indoor'>Indoor</option>
                </select>
            </div>
        </div> : null}
    </div>
)}


export default Filter