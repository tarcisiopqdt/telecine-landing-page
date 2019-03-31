import React from 'react';
import logo from '../../assets/imgs/logo.png'

const Header = (props) => (
   <header className="main-header">
      <div className='container grid grid-template-columns'>

         <div className="header-chamada">
            <picture>
               <source srcSet={logo} type="image/webp"></source>
               <img className='logo' src={logo} alt="Telecine Play" />
            </picture>
            <h1>Filmes exclusivos dos maiores estúdios, é so dar um play</h1>

            <h2>Curta 7 dias grátis, assine por R$37,90/mês e cancele quando quiser.</h2>

            <a className='btn btn-assine' href="/cadastro">Experimente grátis &#8594;</a>
         </div>

         <div className="header-carousel">
            <picture>
               <source media="(min-width: 1200px)" srcSet={props.imgDesktop} />
               <source media="(min-width: 724px )"srcSet={props.imgTablet}/>
               <img className='img-resp' src={props.imgTablet} alt="" />
            </picture>

         </div>

      </div>

   </header>
)

export default Header;