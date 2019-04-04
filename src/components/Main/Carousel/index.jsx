import React from 'react';
import AliceCarousel from 'react-alice-carousel';



const Carousel = (props) => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <div className="container slide">
      <AliceCarousel mouseDragEnabled
        buttonsDisabled={true}
        disableAutoPlayOnAction={true}
        autoPlayInterval={2000}
        className={"slide-item"}
        autoPlay={true}>

         {/* Pega as props vindo do Main e cria uma tag "img" dinamicamente */}
          {props.populares.map( (filme, index) => (
          <img key={filme.id} src={filme.poster_m} alt={filme.titulo_portugues} className="slide-item" onDragStart={handleOnDragStart}/>
        ))}

        </AliceCarousel>
        
    </div>


  )
}

export default Carousel
