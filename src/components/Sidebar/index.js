import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React from 'react'
import LogoSubtitle from '../../assets/images/logo_67.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img className="sub-logo" src={LogoSubtitle} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="$4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="$4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="$4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sultan-baimukhanov-327329218/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#3c4145"/>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Mosiva"
          >
            <FontAwesomeIcon icon={faGithub} color="#3c4145"/>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hh.kz/applicant/resumes/view?resume=3e7ab4ecff03d7a1340039ed1f354b6b657739"
          >
            <FontAwesomeIcon icon={faDiscord} color="#3c4145"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
