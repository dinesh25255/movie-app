import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, EffectCreative, Autoplay } from 'swiper';

const MovieBanner = () => {

  const maxLength = 10;
  const bannerImage = [];

  const addBannerImage = () => {
    for (let i = 1; i <= maxLength; i++) {
      bannerImage.push(`banner-${i}.jpg`);
    }
  }

  addBannerImage();


  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination, A11y, EffectCreative, Autoplay]}
      grabCursor={true}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
        },
      }}
      autoplay={{ delay: 7000, pauseOnMouseEnter: true, disableOnInteraction: false }}

      className='banner'
    >
      {bannerImage.map((data, i) => {
        return (
          <SwiperSlide key={i} >
            <div className="w-[100%] h-[450px] rj-xl:h-[350px] rj-lg:h-[300px] rj-md:h-[250px] rj-sm:h-[150px]">
              <div className="h-[100%]">
                <img src={`./images/${data}`} alt="" className=' w-[100%] h-[100%] object-cover ' />
              </div>

            </div>

          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MovieBanner