import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Media from './Media';

const Slider = ({ slides, autoplay, slidesPerView, onSlideClick }) => {
    const handleSlideClick = (index) => {
      if (onSlideClick) {
        onSlideClick(index); // Pass the clicked index to the parent component
      }
    };
  
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={autoplay}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}

        
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
            
            <Media
            src={slide.image}
            alt={slide.alt}
            type={slide.type}
            title={slide.title}
            width={slide.width}
            height={slide.height}
            controls={slide.control || false} 
          />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default Slider;