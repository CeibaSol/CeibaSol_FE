import { Carousel } from "react-responsive-carousel";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function DemoCarousel(props) {

  const { imagenes } = props;

  return (
    <div>
      <Carousel slideInterval={500}>
        {imagenes?.map((image, index) => (
          <div key={index}>
            <img src={image} alt={"Imagen " + index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
