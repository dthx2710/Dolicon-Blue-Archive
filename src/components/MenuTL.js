import React from 'react'

export default class MenuTL extends React.Component {

  render() {

    return (
      <div className="columns is-multiline is-vcentered has-text-centered">
        <div className="column is-6">
            <p className="has-text-weight-bold is-bold-light">
                Home Screen
            </p>
            <img src={`../../img/Home_Screen.png`} alt="Home Screen" title="Home Screen"/>
        </div>
        <div className="column is-6">
            <p className="has-text-weight-bold is-bold-light">
                Shop
            </p>
            <img src={`../../img/Shop.png`} alt="Shop" title="Lobby"/>
        </div>
        <div className="column is-6">
            <p className="has-text-weight-bold is-bold-light">
                Character Info
            </p>
            <img src={`../../img/Character_Info.png`} alt="Character Info" title="Character Info"/>
        </div>
        <div className="column is-6">
            <p className="has-text-weight-bold is-bold-light">
                Unit Formation
            </p>
            <img src={`../../img/Unit_Formation.png`} alt="Unit Formation" title="Unit Formation"/>
        </div>
        <div className="column is-6">
            <p className="has-text-weight-bold is-bold-light">
                Organizing Unit Formation
            </p>
            <img src={`../../img/Organizing_Unit_Formation.png`} alt="Organizing Unit Formation" title="Organizing Unit Formation"/>
        </div>
        <div className="column is-6">
            <p className="has-text-weight-bold is-bold-light">
                Compability Info
            </p>
            <img src={`../../img/Compability_Info.png`} alt="Compability Info" title="Compability Info"/>
        </div>
        <div className="column is-6">
            <p className="has-text-weight-bold is-bold-light">
                Options - Graphics
            </p>
            <img src={`../../img/Options1.png`} alt="Options - Graphics" title="Options - Graphics"/>
        </div>
        <div className="column is-6">
            <p className="has-text-weight-bold is-bold-light">
                Options - Game
            </p>
            <img src={`../../img/Options2.png`} alt="Options - Game" title="Options - Game"/>
        </div>
        <div className="column is-6">
            <p className="has-text-weight-bold is-bold-light">
                Daily Quests
            </p>
            <img src={`../../img/DailiesTL.png`} alt="Dailies" title="Dailies"/>
        </div>




        <p className="column is-12 is-size-6">
            All Credits to Xeno#4557 &#38; DemonZVirus#1155 for the original images/translations.
        </p>
      </div>
    )
  }
}