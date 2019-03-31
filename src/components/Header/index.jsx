import React from 'react';
import logo from '../../assets/imgs/logo.png'

const Header = () => (
   <header className="main-header">
      <div className='container grid grid-template-columns'>

         <div className="header-chamada">
            <picture>
               <source srcSet={logo} type="image/webp"></source>
               <img className='logo' src={logo} alt="Telecine Play" />
            </picture>
            <h1>Filmes exclusivos dos maiores estúdios, é so dar um play</h1>

            <h2>Curta 7 dias grátis, assine por R$37,90/mês e cancele quando quiser.</h2>

            <a className='btn btn-assine' href="http://www.google.com">Experimente grátis</a>
         </div>

         <div className="header-carousel">
         </div>

      </div>

   </header>
)

export default Header;