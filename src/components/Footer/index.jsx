import React from 'react'
import logo from '../../assets/imgs/logo.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <picture>
                <source srcSet={logo} />
                <img className='logo' src={logo} alt="Telecine Play" />
            </picture>
            <h2>Ficou com alguma dúvida?</h2>
            <h2 className='span-ajuda'>Acesse nossa ajuda</h2>

        </footer>
    )
}

export default Footer;