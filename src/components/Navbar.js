import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
 return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <button type="button" className="btn btn-secondary" onClick={() => props.newc('grey')}>Grey Mode</button>
            </li>
            <li className="nav-item mx-2 my-1">
              <button type="button" className="btn btn-secondary" onClick={() => props.newc('#03072b')}>Blue Mode</button>
            </li>
            <li className="nav-item mx-2 my-1">
              <button type="button" className="btn btn-secondary" onClick={() => props.newc('#260221')} >Violet Mode</button>
            </li>
            
              
           

          </ul>
          <div className="d-flex ">
                <div className='bg-success rounded mx-2' onClick={()=>{props.newc('green')}} style={{height: '30px' , width: '30px', cursor:'pointer'}}></div>
              </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"></input>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {`${props.mode === 'light' ? 'dark' : 'light'}`} mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "Enter Title Here",
  aboutText: "Enter About Bro"
}
