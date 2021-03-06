import React from 'react';
import logo from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom'
const Header = (props) => (
   <header
      className="bg-header"
      style={{ backgroundImage: `url(${props.bgImg})` }}>
   <div className="container"> 
      <div className=" filter-header">
            <picture>
               <source srcSet={logo} type="image/webp"></source>
               <img className='logo' src={logo} alt="Telecine Play" />
            </picture>
            <h1 className="header-title">Filmes exclusivos dos maiores estúdios, é so dar um play</h1>
            <h2 className="header-subtitle">Curta 7 dias grátis, assine por R$37,90/mês e cancele quando quiser.</h2>
            <Link className='btn-assine' to="/cadastro">Experimente grátis &#8594;</Link>
      </div>
   </div>
   </header>
)



export default Header;