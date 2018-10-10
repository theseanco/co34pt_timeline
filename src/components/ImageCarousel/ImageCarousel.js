import React from "react";
import { Carousel } from "react-responsive-carousel";
import './ImageCarousel.css'

//A carousel displaying all images with accompanying dropover titles
//receives the titles of the image and the picture number to display as props

export default ({imageTitles, pictureNumber, images, openBandcamp, playPause}) => (
  <Carousel
    autoPlay={false}
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    showArrows={false}
    selectedItem={pictureNumber}
    className="editMargins"
    >

      {/*}
    <div>
      <img src={require(`../../assets/${images[0]}`)} />
      <p className="legend">{imageTitles[0]}</p>
    </div>
    */}

    {/* uses .map to dynamically grab images and text and place them into the carousel*/}
    {images.map(function(object, i){
      return (
        <div>
        <img src={require(`../../assets/images/${images[i]}`)} className="imageStyling"/>
        <p className="legend">{imageTitles[i]}</p>
      </div>
    )
    })}

    </Carousel>
);
