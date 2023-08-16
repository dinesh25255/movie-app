import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { Image, Shimmer } from 'react-shimmer';

const StarCast = ({ cast }) => {
  return (
    <div className="w-[95%] mx-auto py-5 overflow-hidden mt-2 movie-detail">
      <h2 className='text-2xl font-medium pt-3 pb-4'>Top Billed Cast</h2>
      <Swiper
        modules={[Navigation]}

        slidesPerView={6}
        navigation={true}

        breakpoints={{

          250: {
            spaceBetween: 80,
            slidesPerView: 3
          },
          768: {

            slidesPerView: 3
          },
          1024: {

            slidesPerView: 4
          },
          1280: {

            slidesPerView: 5
          },
          1440: {
            slidesPerView: 6
          }
        }}



      >
        {cast.map((star, index) => {

          return (
            <div key={index}>
              {index <= 13 &&
                <SwiperSlide key={index} className='mr-5'  >
                  <div className={window.innerWidth <= 320 ? `w-[120px] h-[250px] ` : window.innerWidth <= 640 ? `w-[140px] h-[250px] ` : `w-[240px] h-[400px] `}>
                    <div className="rounded-md h-[80%] overflow-hidden">
                      {star?.profile_path &&
                        <Image fallback={window.innerWidth <= 640 ? <Shimmer width={120} height={280} /> : <Shimmer width={240} height={400} />} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${star?.profile_path}`} className='w-[100%] h-[100%] object-contain' />}


                    </div>
                    <div className="py-2 px-1 rj-sm:pt-0 rj-sm:w-[100%]">
                      <h2 className='font-semibold rj-sm:text-xs'>{star?.name ?? star?.orginal_name}</h2>

                      <h3 className='text-sm'>{star?.character}</h3>
                    </div>

                  </div>
                </SwiperSlide>
              }
            </div>
          )
        })}
      </Swiper >
    </div>
  )
}

export default StarCast