import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <div className="slide-">
      <AliceCarousel mouseDragEnabled
        buttonsDisabled={true}
        disableAutoPlayOnAction={true}
        autoPlayInterval={2000}
        autoPlay={true}>
        <img src="https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27163734%27&EntityType=%27Item%27&EntityId=%278054%27&Width=360&Height=540&device=web_browser&subscriptions=Anonymous" onDragStart={handleOnDragStart} className="card" />
        <img src="https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27176909%27&EntityType=%27Item%27&EntityId=%2710527%27&Width=360&Height=540&device=web_browser&subscriptions=Anonymous" onDragStart={handleOnDragStart} className="card" />
        <img src="https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27176459%27&EntityType=%27Item%27&EntityId=%2710171%27&Width=360&Height=540&device=web_browser&subscriptions=Anonymous" onDragStart={handleOnDragStart} className="card" />
        <img src="https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27176897%27&EntityType=%27Item%27&EntityId=%2710165%27&Width=360&Height=540&device=web_browser&subscriptions=Anonymous" onDragStart={handleOnDragStart} className="card" onDragStart={handleOnDragStart} className="card" />
      </AliceCarousel>
    </div>


  )
}

export default Carousel
