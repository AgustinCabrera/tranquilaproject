import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const CarouselComponent = () => {
  
return (
  <Carousel>
  <div>
      <img alt="a" src='./assets/banio.jpg' />
  </div>
  <div>
      <img alt="banio" src="public/fotosQuinta/banio.jpg" />
  </div>
  <div>
      <img alt="a" src="assets/3.jpeg" />
  </div>
</Carousel>
);
}