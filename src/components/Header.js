import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-laptop"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hi, it's me, Tatiana B. here</h1>
        <p className="mainpar">
          Backend, DevOps, Infrastructure
        </p>
        <div className="socialogo">
          <a className="link" target="_blank" href="https://www.linkedin.com/in/tatiana-barrios-montenegro-b80415127/"><span className="icon fa-linkedin"></span></a>
        </div>
        <div className="socialogo">
          <a className="link" target="_blank" href="https://github.com/tiannymonti"><span className="icon fa-github"></span></a>
        </div>
        <div className="socialogo">
          <a className="link" target="_blank" href="https://twitter.com/villaintianny"><span className="icon fa-twitter"></span></a>
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Who am I?
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Mail me
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
