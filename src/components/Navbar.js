import React from 'react'
import { Link } from 'gatsby'
//import github from '../img/github-icon.svg'
import logo from '../img/logo.webp'
import kofi from '../img/social/BuyMeACoffee_blue@2x.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      dbexpand: false,
      dbDropdownActiveClass: '',
      toolsexpand: false,
      toolsDropdownActiveClass: '',

    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  toggleDBDropdown = () => {
    this.setState(
      {
        dbexpand: !this.state.dbexpand,
      },
      () => {
        this.state.dbexpand
          ? this.setState({
              dbDropdownActiveClass: 'expand',
            })
          : this.setState({
            dbDropdownActiveClass: '',
            })
      }
    )
  }

  toggleToolsDropdown = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        toolsexpand: !this.state.toolsexpand,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.toolsexpand
          ? this.setState({
              toolsDropdownActiveClass: 'expand',
            })
          : this.setState({
              toolsDropdownActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Blue Archive" style={{ width: '120px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
              role="button"
              tabIndex="0"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              

              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-item navbar-link" onClick={() => this.toggleDBDropdown()} onKeyDown={() => this.toggleDBDropdown()} role="button" tabIndex="0">Database</div>
                <div className={`navbar-dropdown ${this.state.dbDropdownActiveClass}`}>
                  <Link className="navbar-item dropdown-item" to="/strikers">Strikers</Link>
                  <Link className="navbar-item dropdown-item" to="/specials">Specials</Link>
                </div>
              </div>
              
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-item navbar-link" onClick={() => this.toggleToolsDropdown()} onKeyDown={() => this.toggleToolsDropdown()} role="button" tabIndex="0">Tools</div>
                <div className={`navbar-dropdown ${this.state.toolsDropdownActiveClass}`}>
                  <Link className="navbar-item dropdown-item" to="/equip">Equip Drop Optimiser</Link>
                  {/* <Link className="navbar-item dropdown-item" to="/">EXP Calculator</Link>*/}
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-item navbar-link" onClick={() => this.toggleToolsDropdown()} onKeyDown={() => this.toggleToolsDropdown()} role="button" tabIndex="0">Resources</div>
                <div className={`navbar-dropdown ${this.state.toolsDropdownActiveClass}`}>
                  <Link className="navbar-item dropdown-item" to="/reroll">Reroll</Link>
                  <Link className="navbar-item dropdown-item" to="/translations">Menus</Link>
                  <Link className="navbar-item dropdown-item" to="/faq">FAQ</Link>
                </div>
              </div>

              <Link className="navbar-item" to="/gacha">
                Gacha
              </Link>

              <Link className="navbar-item" to="/about">
                About
              </Link>
            </div>
            
            <div className="navbar-end has-text-centered">
            
              <a className="navbar-item" title="ko-fi" href="https://ko-fi.com/dolicon" target="_blank" rel="noopener noreferrer">
                <img
                  src={kofi}
                  alt="Ko-fi"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
