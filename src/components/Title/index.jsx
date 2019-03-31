import React from 'react'
import logo from '../../assets/imgs/logo.png'

const Title = (props) => (
    <header className="title-default" >
        <picture>
            <source srcSet={logo} type="image/webp"></source>
            <img className='logo' src={logo} alt="Telecine Play" />
        </picture>
        <h1 className="title-text">{props.title}</h1>
    </header>


)

export default Title;