import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'

import LogoS from '../../../assets/images/logo_67.png'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      
    </div>
  )
}

export default Logo