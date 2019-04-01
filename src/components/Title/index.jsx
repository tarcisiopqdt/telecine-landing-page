import React from 'react'
import logo from '../../assets/imgs/logo.png'

const Title = (props) => (
    <header className="title-default" >
        <picture>
            <source srcSet={logo} type="image/webp"></source>
            <a href="/">
                <img className='logo' src={logo} alt="Telecine Play" />
            </a>
        </picture>
        <h1 className="title">{props.title}</h1>
        <h2 className="subtitle">{props.subtitle}</h2>
    </header>


)

export default Title;