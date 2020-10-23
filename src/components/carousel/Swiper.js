import React                                             from 'react'
import SwiperCore, {Pagination, A11y, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './swiper.scss'
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';


SwiperCore.use([Pagination, A11y, Autoplay]);


export default () => {
  const slides = [
    {
      img:'10628.jpg',
      title:'Безупречный интеллект',
      body:'Бортовое радиоэлектронное оборудование',
      footer:'Пилотажно-навигационные комплексы, системы и комплексы индикации и наблюдения, интегрированные комплексы БРЭО',
      key:1
    },
    {
      img:'7126.jpg',
      title:'Безупречный интеллект 2',
      body:'Бортовое радиоэлектронное оборудование 2',
      footer:'Пилотажно-навигационные комплексы, системы и комплексы индикации и наблюдения, интегрированные комплексы БРЭО 2',
      key:2
    },
    {
      img:'7082.jpg',
      title:'Безупречный интеллект 3',
      body:'Бортовое радиоэлектронное оборудование 3',
      footer:'Пилотажно-навигационные комплексы, системы и комплексы индикации и наблюдения, интегрированные комплексы БРЭО 3',
      key:3
    },
  ];
  return (
    <Swiper
      spaceBetween={30}
      mousewheel={true}
      slidesPerView={1}
      pagination={{
        clickable: true }}
      direction={'vertical'}
      speed={3000}
      autoplay={{
      delay: 10000,
      disableOnInteraction: false,
    }}
      cssMode={true}
    >
      {slides.map(({key, img, title, body, footer}, index) => {
        return <SwiperSlide key={key} virtualIndex={index}>
          <a className='slides__inner'>
            <div className='slides__title'>{title}</div>
            <div className='slides__body'>{body}</div>
            <div className='slides__footer'>{footer}</div>
            <div className='aki'>
              <img className='imgg' src={'tpsite_show/'+img} alt=""/>
              <img className='slides__pattern' src="https://www.kret.com/local/templates/kret/img/slider-grid.png" alt=""/>
            </div>
          </a>
        </SwiperSlide>;
      })}
    </Swiper>
  );
};
