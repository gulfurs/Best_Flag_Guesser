import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 0.5,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
  };

  return (
    <div className="Caro-container">
      {/* <h2>Image Carousel</h2> */}
      <Slider {...settings}>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/120px-Flag_of_Denmark.svg.png" 
          alt="Image 1"  
          style={{ width: '100%', height: '300px' }}/>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/120px-Flag_of_Denmark.svg.png" 
          alt="Image 1"  
          style={{ width: '100%', height: '300px' }}/>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/120px-Flag_of_Denmark.svg.png" 
          alt="Image 1"  
          style={{ width: '100%', height: '300px' }}/>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/120px-Flag_of_Denmark.svg.png" 
          alt="Image 1"  
          style={{ width: '100%', height: '300px' }}/>
        </div>
        
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
