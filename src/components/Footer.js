import React from 'react'
import { Link } from 'gatsby'

import discord from '../img/social/discord.svg'
import kofi from '../img/social/Ko-fi_Icon_RGB_rounded.png'
import github from '../img/github-icon.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/strikers">
                        Strikers
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/specials">
                        Specials
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/">
                        EXP Calculator
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              
              <div className="column is-4 social">
                <a title="discord" href="https://discord.gg/bluearchive">
                    <img
                      src={discord}
                      alt="Discord"
                      style={{ width: '2em', height: '2em' }}
                    />
                  </a>
                  <a title="ko-fi" href="https://ko-fi.com/dolicon">
                    <img
                      src={kofi}
                      alt="Ko-fi"
                      style={{ width: '2em', height: '2em' }}
                    />
                  </a>
                  <a title="github" href="https://github.com/dthx2710">
                    <img
                      src={github}
                      alt="Github"
                      style={{ width: '2em', height: '2em' }}
                    />
                  </a>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
