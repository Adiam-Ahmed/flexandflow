import React from 'react'
import './Header.scss'
import Logo from '../../assets/logo/logo-white.png'

const Header = () => {
    return (
        <header className='header' >
            <img
                src={Logo}
                alt="flex and flow "
                className="header__logo"
            />
        </header>
    )
}

export default Header