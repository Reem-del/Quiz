import React, { useEffect, useState } from 'react'
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Questions from './questions';

export default function Swipercomp({slides,key}) {
    

    return (
        <Swiper key={key}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper" >
        {slides.map((ele)=>(
        <SwiperSlide >
            <Questions collection={ele} />
        </SwiperSlide>)
        )}
            </Swiper>
            
       
    )
}
