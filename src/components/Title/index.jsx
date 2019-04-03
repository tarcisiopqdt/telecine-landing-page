import React from 'react'
import logo from '../../assets/imgs/logo.png'

const Title = (props) => (
    <header className="header-content">
        <div className="logo-content">
            <picture>
                <source srcSet={logo} type="image/webp"></source>
                <a href="/">
                    <img className='logo' src={logo} alt="Telecine Play" />
                </a>
            </picture>
        </div>


        <div className={`${props.className}`}>
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.subtitle}</h2>
        </div>
    </header>



)

export default Title;