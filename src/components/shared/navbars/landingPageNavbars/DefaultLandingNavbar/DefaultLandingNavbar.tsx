import React from 'react'
import './DefaultLandingNavbar.scss'
import logo from '../../../../../assets/shared/logo_long.svg'

const DefaultLandingNavbar = () => {
    return (
        <nav className='DefaultNav_Container'>
            <div className='DefaultNav_Logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='DefaultNav_ButtonsContainer'>
                <button className='DefaultNav_LoginButton'><a href='/app'>Log in</a></button>
                <button className='DefaultNav_SignUpButton'><a href='/app'>Try Now!</a></button>
            </div>
        </nav>
    )
}

export default DefaultLandingNavbar